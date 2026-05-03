import { fetcher } from "./fetcher";
import { ResponseData } from "@/(viewModel)/ResponseData";
import { RoomOrderVM } from "@/(viewModel)/RoomOrderVM";
import { SearchPaginVM } from "@/(viewModel)/SearchPaginVM";

export const getRoomOrders = async (): Promise<ResponseData<RoomOrderVM[]> | null> => {
    return await fetcher(`/dat-phong`);
}
export const getRoomOrder = async (roomOrderId: number): Promise<ResponseData<RoomOrderVM> | null> => {
    return await fetcher(`/dat-phong.${roomOrderId}`);
}
export const postRoomOrder = async (data: RoomOrderVM): Promise<ResponseData<RoomOrderVM> | null> => {
    return await fetcher(`/dat-phong`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}
export const putRoomOrder = async (roomOrderId: number, data: RoomOrderVM): Promise<ResponseData<RoomOrderVM> | null> => {
    return await fetcher(`/dat-phong/${roomOrderId}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    });
}
export const deleteRoomOrder = async (roomOrderId: number): Promise<ResponseData<RoomOrderVM> | null> => {
    return await fetcher(`/dat-phong/${roomOrderId}`, {
        method: 'PUT',
        body: null
    });
}
export const getRoomOrdersByUserId = async (userId: number): Promise<ResponseData<RoomOrderVM[]> | null> => {
    return await fetcher(`/dat-phong/lay-theo-nguoi-dung/${userId}`);
}
export const getSearchPaginRoomOrders = async (pageIndex: number, pageSize: number, keyword: string): Promise<ResponseData<SearchPaginVM<RoomOrderVM>> | null> => {
    return await fetcher(`/vi-tri/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}&keyword=${keyword}`);
}   