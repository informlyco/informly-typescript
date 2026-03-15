import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as InformlyApi from "../index.js";
export declare class ForbiddenError extends errors.InformlyApiError {
    constructor(body: InformlyApi.ErrorResponse, rawResponse?: core.RawResponse);
}
