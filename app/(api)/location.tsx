import { ResponseData } from "../(viewModel)/ResponseData";
import { LocationVM } from "../(viewModel)/LocationVM";
import { fetcher } from "./fetcher"
import { SearchPaginVM } from "@/(viewModel)/SearchPaginVM";

export const getLocations = async (): Promise<ResponseData<LocationVM[]> | null> => {
    return await fetcher('/vi-tri');
}
export const getLocation = async (locationId: number): Promise<ResponseData<LocationVM>> => {
    return fetcher(`/vi-tri/${locationId}`);
}
export const postLocation = async (data: LocationVM): Promise<ResponseData<LocationVM> | null> => {
    return fetcher('/vi-tri', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}
export const putLocation = async (locationId: number, data: LocationVM) => {
    return fetcher(`/vi-tri/${locationId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
}
export const deleteLocation = async (locationId: number) => {
    return fetcher(`/vi-tri/${locationId}`, {
        method: 'DELETE',
        body: null,
    });
}
export const postLocationThumb = async (file: File, locationId: number): Promise<ResponseData<LocationVM> | null> => {
    const formData = new FormData();
    formData.append('formFile', file);
    formData.append('maViTri', locationId.toString());
    return await fetcher(`/users/upload-avatar`, {
        method: 'POST',
        body: formData,
    });
}



export const getSearchPaginLocations = async (pageIndex: number, pageSize: number, keyword: string): Promise<ResponseData<SearchPaginVM<LocationVM>> | null> => {
    return await fetcher(`/vi-tri/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}&keyword=${keyword}`);
}


