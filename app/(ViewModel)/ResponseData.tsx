export interface ResponseData<T> {
    content: T;
    statusCode: number;
    message: string;
    success: boolean;
}