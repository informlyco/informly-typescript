import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as InformlyApi from "../../../index.js";
export declare namespace ContactsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ContactsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ContactsClient.Options>;
    constructor(options?: ContactsClient.Options);
    /**
     * @param {InformlyApi.ListContactsRequest} request
     * @param {ContactsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link InformlyApi.UnauthorizedError}
     * @throws {@link InformlyApi.ForbiddenError}
     *
     * @example
     *     await client.contacts.listContacts()
     */
    listContacts(request?: InformlyApi.ListContactsRequest, requestOptions?: ContactsClient.RequestOptions): core.HttpResponsePromise<InformlyApi.ListContactsResponse>;
    private __listContacts;
    /**
     * @param {InformlyApi.CreateContact} request
     * @param {ContactsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link InformlyApi.BadRequestError}
     * @throws {@link InformlyApi.UnauthorizedError}
     * @throws {@link InformlyApi.ForbiddenError}
     *
     * @example
     *     await client.contacts.createContact()
     */
    createContact(request?: InformlyApi.CreateContact, requestOptions?: ContactsClient.RequestOptions): core.HttpResponsePromise<InformlyApi.CreateContactResponse>;
    private __createContact;
    /**
     * @param {InformlyApi.GetContactRequest} request
     * @param {ContactsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link InformlyApi.UnauthorizedError}
     * @throws {@link InformlyApi.NotFoundError}
     *
     * @example
     *     await client.contacts.getContact({
     *         id: "id"
     *     })
     */
    getContact(request: InformlyApi.GetContactRequest, requestOptions?: ContactsClient.RequestOptions): core.HttpResponsePromise<InformlyApi.GetContactResponse>;
    private __getContact;
}
