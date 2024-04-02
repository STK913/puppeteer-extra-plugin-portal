'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var puppeteerExtraPlugin = require('puppeteer-extra-plugin');
var url = require('url');
var express = require('express');
var http = require('http');
var path = require('path');
var https = require('https');
var events = require('events');
var ws = require('ws');

var SpecialCommands;
(function (SpecialCommands) {
    SpecialCommands["START_SCREENCAST"] = "Page.startScreencast";
    SpecialCommands["SET_VIEWPORT"] = "Page.setViewport";
})(SpecialCommands || (SpecialCommands = {}));
var MiscCommands;
(function (MiscCommands) {
    MiscCommands["RELOAD"] = "Page.reload";
    MiscCommands["NAVIGATE_TO_HISTORY_ENTRY"] = "Page.navigateToHistoryEntry";
    MiscCommands["EMULATE_TOUCH_FROM_MOUSE"] = "Input.emulateTouchFromMouseEvent";
    MiscCommands["DISPACTCH_KEY"] = "Input.dispatchKeyEvent";
    MiscCommands["SCREENCAST_ACK"] = "Page.screencastFrameAck";
})(MiscCommands || (MiscCommands = {}));
class PageHandler {
    constructor(props) {
        this.debug = props.debug.extend(props.targetId);
        this.page = props.page;
        if (props.ws)
            this.setWs(props.ws);
        this.debug('Created pageHandler');
    }
    async safeFn(fn) {
        try {
            return await fn();
        }
        catch (err) {
            if (err instanceof Error) {
                this.debug(err.message);
            }
            else {
                this.debug(err);
            }
            return undefined;
        }
    }
    setWs(ws) {
        this.debug('Setting websocket');
        this.ws = ws;
        ws.on('message', this.messageHandler.bind(this));
        ws.on('error', this.onError.bind(this));
    }
    async close() {
        this.debug('Closing websocket');
        if (this.ws)
            this.ws.close();
        await this.safeFn(async () => {
            if (this.cdpSession)
                return this.cdpSession.detach();
            return undefined;
        });
    }
    async getCdpSession() {
        if (!this.cdpSession) {
            this.cdpSession = await this.page.target().createCDPSession();
            this.cdpSession.on('error', (e) => this.debug(e));
        }
        return this.cdpSession;
    }
    onError(err) {
        this.debug(err);
    }
    async messageHandler(data) {
        const dataString = data.toString();
        const commandRequest = JSON.parse(dataString);
        if (commandRequest.command !== MiscCommands.EMULATE_TOUCH_FROM_MOUSE) {
            this.debug('Received message: %s', dataString);
        }
        if (commandRequest.command === SpecialCommands.START_SCREENCAST) {
            return this.startScreencast(commandRequest.params);
        }
        if (commandRequest.command === SpecialCommands.SET_VIEWPORT) {
            return this.setViewPort(commandRequest.params);
        }
        return this.sendMiscCommand(commandRequest);
    }
    async setViewPort(data) {
        await this.safeFn(() => this.page.setViewport(data));
    }
    async startScreencast(params) {
        const client = await this.getCdpSession();
        await this.safeFn(() => client.send('Page.startScreencast', params));
        client.on('Page.screencastFrame', this.onScreencastFrame.bind(this));
    }
    onScreencastFrame(data) {
        this.debug('Got screencast frame: %j', { sessionId: data.sessionId, metadata: data.metadata });
        const commandResponse = { command: 'Page.screencastFrame', data };
        if (!this.ws)
            throw new Error('Websocket not set for page');
        this.ws.send(Buffer.from(JSON.stringify(commandResponse)));
    }
    async sendMiscCommand(commandRequest) {
        const client = await this.getCdpSession();
        if (Object.values(MiscCommands).includes(commandRequest.command)) {
            return this.safeFn(() => client.send(commandRequest.command, commandRequest.params));
        }
        return undefined;
    }
}

const frontendRoot = path.extname(__filename) === '.ts'
    ? path.join(__dirname, '..', 'dist', 'frontend')
    : path.join(__dirname, 'frontend');
class PortalServer {
    constructor(props) {
        this.targetIdPageHandlerMap = new Map();
        this.serverOpts = {};
        this.isMiddleware = false;
        this.portalMiddleware = async (req, _res, next) => {
            try {
                const upgradeHeader = (req.headers.upgrade || '').split(',').map((s) => s.trim());
                if (upgradeHeader.indexOf('websocket') === 0) {
                    this.debug('Detected websocket upgrade header');
                    if (!this.wsServer) {
                        this.debug('Creating new WebSocket server');
                        this.wsServer = new ws.WebSocketServer({ noServer: true });
                    }
                    await this.upgradeHandler(req, this.wsServer);
                    return undefined;
                }
                return next();
            }
            catch (err) {
                return next(err);
            }
        };
        this.middlewareHandlers = [express.static(frontendRoot), this.portalMiddleware];
        this.debug = props.debug;
        this.listenOpts = props.listenOpts;
        this.serverOpts = props.serverOpts || {};
        this.webPortalBaseUrl = props.webPortalBaseUrl;
        this.basePath = props.webPortalBaseUrl?.pathname || '/';
        this.debug('basePath:', this.basePath);
    }
    createPortalMiddleware() {
        this.isMiddleware = true;
        return this.middlewareHandlers;
    }
    upgradeHandler(req, wsServer) {
        return new Promise((resolve, reject) => {
            try {
                wsServer.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws, request) => {
                    this.debug('In wsServer handleUpgrade');
                    if (!request.url)
                        throw new Error('Websocket request lacks URL');
                    const targetId = request.url.split('/').slice(-1)[0];
                    if (!targetId)
                        throw new Error(`Could not find targetId in upgrade request`);
                    const pageHandler = this.targetIdPageHandlerMap.get(targetId);
                    if (!pageHandler)
                        throw new Error('Could not find matching page handler for target ID');
                    pageHandler.setWs(ws);
                    wsServer.emit('connection', ws, req);
                    this.debug('Emitted connection for target %s', targetId);
                    resolve(ws);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
    async openServer() {
        if (!this.server) {
            this.debug('Starting the express server...');
            const app = express();
            app.use(this.basePath, this.middlewareHandlers);
            if (Object.entries(this.serverOpts).length > 0) {
                // The serverOpts are mostly HTTPS-related options, so use `https` if there's any options set
                this.server = https.createServer(this.serverOpts, app);
            }
            else {
                // Otherwise, we just use `http`. This is pretty much the first half of `app.listen()`
                this.server = http.createServer(app);
            }
            this.server = app.listen(this.listenOpts);
            this.server.headersTimeout = 0;
            await events.once(this.server, 'listening');
            this.debug('Express server now listening');
        }
    }
    closeServer() {
        if (this.server) {
            this.debug('No more open portals, shutting down the express server...');
            this.server.close(() => {
                this.debug('The express server has been closed');
                this.server = undefined;
            });
        }
    }
    async hostPortal(params) {
        if (this.targetIdPageHandlerMap.size === 0 && !this.isMiddleware) {
            await this.openServer();
        }
        const pageHandler = new PageHandler({
            page: params.page,
            targetId: params.targetId,
            debug: this.debug,
        });
        this.targetIdPageHandlerMap.set(params.targetId, pageHandler);
        const fullUrl = this.webPortalBaseUrl;
        fullUrl.searchParams.set('targetId', params.targetId);
        this.debug('fullUrl', fullUrl.toString());
        return fullUrl.toString();
    }
    async closePortal(targetId) {
        this.debug(`Closing portal for targetId "${targetId}"`);
        const handler = this.targetIdPageHandlerMap.get(targetId);
        if (handler)
            await handler.close();
        this.targetIdPageHandlerMap.delete(targetId);
        if (this.targetIdPageHandlerMap.size === 0 && !this.isMiddleware) {
            this.closeServer();
        }
    }
    hasOpenPortal(targetId) {
        return this.targetIdPageHandlerMap.has(targetId);
    }
}

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const getPageTargetId = (page) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, no-underscore-dangle, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    return page.target()._targetId;
};
/**
 * A puppeteer-extra plugin to let you interact with headless sessions remotely.
 * @noInheritDoc
 */
class PuppeteerExtraPluginPortal extends puppeteerExtraPlugin.PuppeteerExtraPlugin {
    constructor(opts) {
        super(opts);
        this.debug('Initialized', this.opts);
        this.webPortalBaseUrl = new url.URL(this.opts.webPortalConfig.baseUrl);
        this.portalServer = new PortalServer({
            debug: this.debug,
            webPortalBaseUrl: this.webPortalBaseUrl,
            listenOpts: this.opts.webPortalConfig?.listenOpts,
            serverOpts: this.opts.webPortalConfig?.serverOpts,
        });
        this.createExpressMiddleware = this.portalServer.createPortalMiddleware.bind(this.portalServer);
    }
    get name() {
        return 'portal';
    }
    get defaults() {
        return {
            webPortalConfig: {
                listenOpts: {
                    port: 3000,
                },
                baseUrl: 'http://localhost:3000',
            },
        };
    }
    async openPortal(page) {
        const targetId = getPageTargetId(page);
        const url = await this.portalServer.hostPortal({
            page,
            targetId,
        });
        return url;
    }
    async closePortal(page) {
        const targetId = getPageTargetId(page);
        await this.portalServer.closePortal(targetId);
    }
    hasOpenPortal(page) {
        const targetId = getPageTargetId(page);
        return this.portalServer.hasOpenPortal(targetId);
    }
    async closeAllBrowserPortals(browser) {
        this.debug('Closing all portals for browser');
        const pages = await browser.pages();
        const closePortalPromises = pages.map(this.closePortal.bind(this));
        await Promise.all(closePortalPromises);
    }
    addCustomMethods(prop) {
        /* eslint-disable no-param-reassign */
        prop.openPortal = async () => this.openPortal(prop);
        prop.closePortal = async () => this.closePortal(prop);
        prop.hasOpenPortal = () => this.hasOpenPortal(prop);
    }
    /** Add additions to already existing pages  */
    async onBrowser(browser) {
        const pages = await browser.pages();
        pages.forEach((page) => this.addCustomMethods(page));
        browser.on('disconnected', () => this.closeAllBrowserPortals(browser));
    }
    async onTargetCreated(target) {
        this.debug('onTargetCreated', target.url());
        const page = await target.page();
        if (page) {
            this.addCustomMethods(page);
            page.on('close', () => this.closePortal(page));
        }
    }
}
/** Default export, PuppeteerExtraPluginRecaptcha  */
const defaultExport = (options) => {
    return new PuppeteerExtraPluginPortal(options);
};

exports.PuppeteerExtraPluginPortal = PuppeteerExtraPluginPortal;
exports.default = defaultExport;


  module.exports = exports.default || {}
  Object.entries(exports).forEach(([key, value]) => { module.exports[key] = value })
//# sourceMappingURL=index.cjs.js.map
