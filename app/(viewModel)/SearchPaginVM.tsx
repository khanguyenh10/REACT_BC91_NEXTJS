export interface SearchPaginVM<T> {
    pageIndex: number;
    pageSize: number;
    totalRow: number;
    data: T[]
}