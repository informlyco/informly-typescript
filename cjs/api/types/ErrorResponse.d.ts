export interface ErrorResponse {
    error: ErrorResponse.Error_;
}
export declare namespace ErrorResponse {
    interface Error_ {
        /** Machine-readable error code */
        code: string;
        /** Human-readable error message */
        message: string;
        /** Field-level validation errors, if applicable */
        details?: Error_.Details.Item[] | undefined;
    }
    namespace Error_ {
        type Details = Details.Item[];
        namespace Details {
            interface Item {
                /** JSON path to the invalid field */
                path: string;
                /** Validation error message for this field */
                message: string;
            }
        }
    }
}
