import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as Informly from "../../../index.js";
export declare namespace SegmentsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SegmentsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SegmentsClient.Options>;
    constructor(options: SegmentsClient.Options);
    /**
     * Returns all segments available in the organization.
     *
     * @param {SegmentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Informly.UnauthorizedError}
     * @throws {@link Informly.ForbiddenError}
     *
     * @example
     *     await client.segments.listSegments()
     */
    listSegments(requestOptions?: SegmentsClient.RequestOptions): core.HttpResponsePromise<Informly.ListSegmentsResponse>;
    private __listSegments;
}
