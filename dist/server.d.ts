/// <reference types="node" />
/// <reference types="node" />
import express from 'express';
import type { ListenOptions } from 'net';
import { ServerOptions } from 'https';
import debug from 'debug';
import type { Page } from 'puppeteer';
export interface PortalServerProps {
    listenOpts?: ListenOptions;
    serverOpts?: ServerOptions;
    webPortalBaseUrl: URL;
    debug: debug.Debugger;
}
export interface HostPortalParams {
    page: Page;
    targetId: string;
}
export declare class PortalServer {
    private server?;
    private wsServer?;
    private targetIdPageHandlerMap;
    private listenOpts?;
    private serverOpts;
    private webPortalBaseUrl;
    private debug;
    private basePath;
    private isMiddleware;
    constructor(props: PortalServerProps);
    private portalMiddleware;
    private middlewareHandlers;
    createPortalMiddleware(): express.RequestHandler[];
    private upgradeHandler;
    private openServer;
    private closeServer;
    hostPortal(params: HostPortalParams): Promise<string>;
    closePortal(targetId: string): Promise<void>;
    hasOpenPortal(targetId: string): boolean;
}
