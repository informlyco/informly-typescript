export interface DeleteContactsResponse {
    data: DeleteContactsResponse.Data;
}
export declare namespace DeleteContactsResponse {
    interface Data {
        /** Number of contacts deleted */
        count: number;
    }
}
