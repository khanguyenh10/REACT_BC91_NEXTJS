import { fetcher } from "./fetcher";
import { ResponseData } from "@/(viewModel)/ResponseData";
import { RoomOrderVM } from "@/(viewModel)/RoomOrderVM";

export const getRoomsOrder = async (): Promise<ResponseData<RoomOrderVM[]> | null> => {
    return await fetcher(`/dat-phong`);
}
export const postRoomOrder = async (data: RoomOrderVM): Promise<ResponseData<RoomOrderVM> | null> => {
    return await fetcher(`/dat-phong`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}