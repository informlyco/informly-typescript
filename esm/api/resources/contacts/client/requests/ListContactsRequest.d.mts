/**
 * @example
 *     {
 *         page: 1,
 *         pageSize: 20
 *     }
 */
export interface ListContactsRequest {
    /** Page number (1-indexed) */
    page?: number;
    /** Number of items per page (1-100) */
    pageSize?: number;
}
