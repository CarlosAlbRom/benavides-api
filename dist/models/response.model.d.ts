export declare class APIResponse {
    constructor();
    private statusCode;
    private message;
    private status;
    private data;
    success(message?: string, data?: any): this;
    error(message?: string): this;
}
