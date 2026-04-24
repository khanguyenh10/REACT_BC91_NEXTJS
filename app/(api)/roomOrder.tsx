import { RoomVM } from "@/(viewModel)/RoomVM";
import { fetcher } from "./fetcher";
import { ResponseData } from "@/(viewModel)/ResponseData";
import { RoomOrderVM } from "@/(viewModel)/RoomOrderVM";

export const getRoomsOrder = async (): Promise<ResponseData<RoomOrderVM[]> | null> => {
    return await fetcher(`/dat-phong`);
}
