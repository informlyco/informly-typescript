export interface PaginationMeta {
    /** Total number of items across all pages */
    total: number;
    /** Current page number */
    page: number;
    /** Number of items per page */
    pageSize: number;
    /** Total number of pages */
    totalPages: number;
}
