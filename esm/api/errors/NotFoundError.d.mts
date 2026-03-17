import type * as core from "../../core/index.mjs";
import * as errors from "../../errors/index.mjs";
import type * as Informly from "../index.mjs";
export declare class NotFoundError extends errors.InformlyError {
    constructor(body: Informly.ErrorResponse, rawResponse?: core.RawResponse);
}
