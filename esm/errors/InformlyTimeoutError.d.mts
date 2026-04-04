export declare class InformlyTimeoutError extends Error {
    readonly cause?: unknown;
    constructor(message: string, opts?: {
        cause?: unknown;
    });
}
