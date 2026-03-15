import { ContactsClient } from "./api/resources/contacts/client/Client.js";
import { HealthClient } from "./api/resources/health/client/Client.js";
import type { BaseClientOptions, BaseRequestOptions } from "./BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "./BaseClient.js";
export declare namespace InformlyApiClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class InformlyApiClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<InformlyApiClient.Options>;
    protected _health: HealthClient | undefined;
    protected _contacts: ContactsClient | undefined;
    constructor(options?: InformlyApiClient.Options);
    get health(): HealthClient;
    get contacts(): ContactsClient;
}
