import { ResponseData } from "@/(viewModel)/ResponseData";
import { fetcher } from "./fetcher";
import { UserVM } from "@/(viewModel)/UserVM";
import { SearchPaginVM } from "@/(viewModel)/SearchPaginVM";


export const getUsers = async (): Promise<ResponseData<UserVM[]>> => {
    return fetcher(`/users`);
}
export const getUser = async (userId: number): Promise<ResponseData<UserVM>> => {
    return fetcher(`/users/${userId}`);
}
export const getUserByName = async (userName: string): Promise<ResponseData<UserVM>> => {
    return fetcher(`/users/${userName}`);
}
export const postUser = async (data: UserVM) => {
    return fetcher('/users', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}
export const putUser = async (userId: number, data: UserVM) => {
    console.log("putUser", data, userId);
    return fetcher(`/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
}
export const deleteUser = async (userId: number) => {
    return fetcher(`/users?id=${userId}`, {
        method: 'DELETE',
        body: null,
    });
}

export const postAvatar = async (file: File): Promise<ResponseData<UserVM> | null> => {
    const formData = new FormData();
    formData.append('formFile', file);
    return await fetcher(`/users/upload-avatar`, {
        method: 'POST',
        body: formData,
    });
}
export const getSearchPaginUsers = async (pageIndex: number, pageSize: number, keyword: string): Promise<ResponseData<SearchPaginVM<UserVM>> | null> => {
    return await fetcher(`/users/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}&keyword=${keyword}`);
}   