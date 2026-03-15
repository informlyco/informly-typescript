import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptions } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import type * as InformlyApi from "../../../index.mjs";
export declare namespace HealthClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class HealthClient {
    protected readonly _options: NormalizedClientOptions<HealthClient.Options>;
    constructor(options?: HealthClient.Options);
    /**
     * Returns the health status of the API service
     *
     * @param {HealthClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.health.healthCheck()
     */
    healthCheck(requestOptions?: HealthClient.RequestOptions): core.HttpResponsePromise<InformlyApi.GetHealthResponse>;
    private __healthCheck;
}
