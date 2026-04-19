import { ResponseData } from "../(viewModel)/ResponseData";
import { LocationVM } from "../(viewModel)/LocationVM";
import { toastError } from "../utils/toast";
import { fetcher } from "./fetcher"
import { SearchLocationVM } from "@/(viewModel)/SearchLocationVM";

export const getLocations = async (): Promise<ResponseData<LocationVM[]> | null> => {
    return await fetcher('/vi-tri');
}
export const getSearchLocations = async (pageIndex: number, pageSize: number, keyword: string): Promise<ResponseData<SearchLocationVM> | null> => {
    return await fetcher(`/vi-tri/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}&keyword=${keyword}`);
}   