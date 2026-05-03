import { ResponseData } from "../(viewModel)/ResponseData";
import { LocationVM } from "../(viewModel)/LocationVM";
import { fetcher } from "./fetcher"
import { SearchPaginVM } from "@/(viewModel)/SearchPaginVM";

export const getLocations = async (): Promise<ResponseData<LocationVM[]> | null> => {
    return await fetcher('/vi-tri');
}
export const getLocationById = async (id: number): Promise<ResponseData<LocationVM> | null> => {
    return await fetcher(`/vi-tri/${id}`);
}
export const getSearchPaginLocations = async (pageIndex: number, pageSize: number, keyword: string): Promise<ResponseData<SearchPaginVM<LocationVM>> | null> => {
    return await fetcher(`/vi-tri/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}&keyword=${keyword}`);
}   