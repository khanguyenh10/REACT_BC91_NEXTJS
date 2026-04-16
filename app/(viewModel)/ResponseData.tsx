export interface ResponseData<T> {
    content: T;
    statusCode: number;
    dataTime: string;
}