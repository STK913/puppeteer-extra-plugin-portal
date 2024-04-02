import { PuppeteerExtraPlugin } from 'puppeteer-extra-plugin';
import type { Browser, Page, Target } from 'puppeteer';
import { RequestHandler } from 'express';
import * as types from './types';
export * from './types';
/**
 * A puppeteer-extra plugin to let you interact with headless sessions remotely.
 * @noInheritDoc
 */
export declare class PuppeteerExtraPluginPortal extends PuppeteerExtraPlugin {
    private webPortalBaseUrl;
    private portalServer;
    createExpressMiddleware: () => RequestHandler[];
    constructor(opts?: Partial<types.PluginOptions>);
    get name(): string;
    get defaults(): types.PluginOptions;
    openPortal(page: Page): Promise<string>;
    closePortal(page: Page): Promise<void>;
    hasOpenPortal(page: Page): boolean;
    private closeAllBrowserPortals;
    private addCustomMethods;
    /** Add additions to already existing pages  */
    onBrowser(browser: Browser): Promise<void>;
    onTargetCreated(target: Target): Promise<void>;
}
/** Default export, PuppeteerExtraPluginRecaptcha  */
declare const defaultExport: (options?: Partial<types.PluginOptions>) => PuppeteerExtraPluginPortal;
export default defaultExport;
