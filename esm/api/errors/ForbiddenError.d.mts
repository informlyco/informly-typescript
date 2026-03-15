import type * as core from "../../core/index.mjs";
import * as errors from "../../errors/index.mjs";
import type * as InformlyApi from "../index.mjs";
export declare class ForbiddenError extends errors.InformlyApiError {
    constructor(body: InformlyApi.ErrorResponse, rawResponse?: core.RawResponse);
}
