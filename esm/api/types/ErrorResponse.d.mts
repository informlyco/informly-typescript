export interface ErrorResponse {
    error: ErrorResponse.Error_;
}
export declare namespace ErrorResponse {
    interface Error_ {
        code: string;
        message: string;
        details?: Error_.Details.Item[] | undefined;
    }
    namespace Error_ {
        type Details = Details.Item[];
        namespace Details {
            interface Item {
                path: string;
                message: string;
            }
        }
    }
}
