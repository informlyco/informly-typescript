import { ContactsClient } from "./api/resources/contacts/client/Client.mjs";
import { HealthClient } from "./api/resources/health/client/Client.mjs";
import type { BaseClientOptions, BaseRequestOptions } from "./BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "./BaseClient.mjs";
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
