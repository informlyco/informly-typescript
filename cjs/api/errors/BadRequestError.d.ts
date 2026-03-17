import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as Informly from "../index.js";
export declare class BadRequestError extends errors.InformlyError {
    constructor(body: Informly.ErrorResponse, rawResponse?: core.RawResponse);
}
