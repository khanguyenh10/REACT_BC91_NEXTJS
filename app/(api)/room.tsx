import { RoomVM } from "@/(viewModel)/RoomVM";
import { fetcher } from "./fetcher";
import { ResponseData } from "@/(viewModel)/ResponseData";

export const getRoomsByLocationId = async (locationId: string): Promise<ResponseData<RoomVM[]> | null> => {
    return await fetcher(`phong-thue/lay-phong-theo-vi-tri?maViTri=${locationId}`);
}