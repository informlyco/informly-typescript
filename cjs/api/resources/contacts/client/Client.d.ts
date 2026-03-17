import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as Informly from "../../../index.js";
export declare namespace ContactsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ContactsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ContactsClient.Options>;
    constructor(options: ContactsClient.Options);
    /**
     * @param {Informly.ListContactsRequest} request
     * @param {ContactsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Informly.UnauthorizedError}
     * @throws {@link Informly.ForbiddenError}
     *
     * @example
     *     await client.contacts.listContacts({
     *         page: 1,
     *         pageSize: 20
     *     })
     */
    listContacts(request?: Informly.ListContactsRequest, requestOptions?: ContactsClient.RequestOptions): core.HttpResponsePromise<Informly.ListContactsResponse>;
    private __listContacts;
    /**
     * @param {Informly.CreateContact} request
     * @param {ContactsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Informly.BadRequestError}
     * @throws {@link Informly.UnauthorizedError}
     * @throws {@link Informly.ForbiddenError}
     *
     * @example
     *     await client.contacts.createContact()
     */
    createContact(request?: Informly.CreateContact, requestOptions?: ContactsClient.RequestOptions): core.HttpResponsePromise<Informly.CreateContactResponse>;
    private __createContact;
    /**
     * @param {Informly.GetContactRequest} request
     * @param {ContactsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Informly.UnauthorizedError}
     * @throws {@link Informly.NotFoundError}
     *
     * @example
     *     await client.contacts.getContact({
     *         id: "id"
     *     })
     */
    getContact(request: Informly.GetContactRequest, requestOptions?: ContactsClient.RequestOptions): core.HttpResponsePromise<Informly.GetContactResponse>;
    private __getContact;
}
