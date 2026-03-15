export interface GetHealthResponse {
    data: GetHealthResponse.Data;
}
export declare namespace GetHealthResponse {
    interface Data {
        status: string;
        service: string;
        version: string;
        timestamp: string;
    }
}
