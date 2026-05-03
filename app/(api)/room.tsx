import { RoomVM } from "@/(viewModel)/RoomVM";
import { fetcher } from "./fetcher";
import { ResponseData } from "@/(viewModel)/ResponseData";

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
export const deleteUser = async (roomId: number) => {
    return fetcher(`/phong-thue/${roomId}`, {
        method: 'DELETE',
        body: null,
    });
}
export const getRoomsByLocationId = async (locationId: number): Promise<ResponseData<RoomVM[]> | null> => {
    return await fetcher(`/phong-thue/lay-phong-theo-vi-tri?maViTri=${locationId}`);
}

