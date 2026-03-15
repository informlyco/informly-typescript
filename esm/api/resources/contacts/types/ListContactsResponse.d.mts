import type * as InformlyApi from "../../../index.mjs";
export interface ListContactsResponse {
    data: InformlyApi.Contact[];
    meta: InformlyApi.PaginationMeta;
}
