import { RoomVM } from "@/(viewModel)/RoomVM";
import { fetcher } from "./fetcher";
import { ResponseData } from "@/(viewModel)/ResponseData";
import { SearchPaginVM } from "@/(viewModel)/SearchPaginVM";

export const getRooms = async (): Promise<ResponseData<RoomVM[]>> => {
    return fetcher(`/phong-thue`);
}
export const getRoom = async (roomId: number): Promise<ResponseData<RoomVM>> => {
    return fetcher(`/phong-thue/${roomId}`);
}
export const postRoom = async (data: RoomVM) => {
    return fetcher('/phong-thue', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}
export const putRoom = async (roomId: number, data: RoomVM) => {
    return fetcher(`/phong-thue/${roomId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
}
export const deleteRoom = async (roomId: number) => {
    console.log('roomId', roomId);
    return fetcher(`/phong-thue/${roomId}`, {
        method: 'DELETE',
        body: null,
    });
}
export const getRoomsByLocationId = async (locationId: number): Promise<ResponseData<RoomVM[]> | null> => {
    return await fetcher(`/phong-thue/lay-phong-theo-vi-tri?maViTri=${locationId}`);
}

export const getSearchPaginRooms = async (pageIndex: number, pageSize: number, keyword: string): Promise<ResponseData<SearchPaginVM<RoomVM>> | null> => {
    return await fetcher(`/phong-thue/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}&keyword=${keyword}`);
}
export const postRoomThumb = async (file: File, roomId: number): Promise<ResponseData<RoomVM> | null> => {
    const formData = new FormData();
    formData.append('formFile', file);
    return await fetcher(`/phong-thue/upload-hinh-phong?maPhong=${roomId}`, {
        method: 'POST',
        body: formData,
    });
}

