import { ResponseData } from "../(viewModel)/ResponseData";
import { LocationVM } from "../(viewModel)/LocationVM";
import { fetcher } from "./fetcher"
import { LocationSearchVM } from "@/(viewModel)/LocationSearchVM";

export const getLocations = async (): Promise<ResponseData<LocationVM[]> | null> => {
    return await fetcher('/vi-tri');
}
export const getSearchLocations = async (pageIndex: number, pageSize: number, keyword: string): Promise<ResponseData<LocationSearchVM> | null> => {
    return await fetcher(`/vi-tri/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}&keyword=${keyword}`);
}   