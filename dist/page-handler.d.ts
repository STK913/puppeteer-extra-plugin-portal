/// <reference types="debug" />
import type { Page } from 'puppeteer';
import type Protocol from 'devtools-protocol';
import { WebSocket } from 'ws';
export interface PageHandlerProps {
    ws?: WebSocket;
    page: Page;
    targetId: string;
    debug: debug.Debugger;
}
export declare enum SpecialCommands {
    START_SCREENCAST = "Page.startScreencast",
    SET_VIEWPORT = "Page.setViewport"
}
export declare enum MiscCommands {
    RELOAD = "Page.reload",
    NAVIGATE_TO_HISTORY_ENTRY = "Page.navigateToHistoryEntry",
    EMULATE_TOUCH_FROM_MOUSE = "Input.emulateTouchFromMouseEvent",
    DISPACTCH_KEY = "Input.dispatchKeyEvent",
    SCREENCAST_ACK = "Page.screencastFrameAck"
}
export type MiscCommandRequest = {
    command: MiscCommands.RELOAD;
    params: Protocol.Page.ReloadRequest;
} | {
    command: MiscCommands.NAVIGATE_TO_HISTORY_ENTRY;
    params: Protocol.Page.NavigateToHistoryEntryRequest;
} | {
    command: MiscCommands.EMULATE_TOUCH_FROM_MOUSE;
    params: Protocol.Input.EmulateTouchFromMouseEventRequest;
} | {
    command: MiscCommands.DISPACTCH_KEY;
    params: Protocol.Input.DispatchKeyEventRequest;
} | {
    command: MiscCommands.SCREENCAST_ACK;
    params: Protocol.Page.ScreencastFrameAckRequest;
};
export type CommandRequest = {
    command: SpecialCommands.START_SCREENCAST;
    params: Protocol.Page.StartScreencastRequest;
} | {
    command: SpecialCommands.SET_VIEWPORT;
    params: Protocol.Page.SetDeviceMetricsOverrideRequest;
} | MiscCommandRequest;
export type CommandResponse = {
    command: 'Page.screencastFrame';
    data: Protocol.Page.ScreencastFrameEvent;
};
export declare class PageHandler {
    private page;
    private ws?;
    private cdpSession;
    private debug;
    constructor(props: PageHandlerProps);
    private safeFn;
    setWs(ws: WebSocket): void;
    close(): Promise<void>;
    private getCdpSession;
    private onError;
    private messageHandler;
    private setViewPort;
    private startScreencast;
    private onScreencastFrame;
    private sendMiscCommand;
}
