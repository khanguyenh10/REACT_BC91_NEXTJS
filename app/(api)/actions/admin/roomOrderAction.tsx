"use server";

import { revalidatePath } from "next/cache";
import { deleteRoomOrder } from "@/(api)/roomOrder";




export const removeRoomOrderAction = async (roomOrderId: number, pathname: string): Promise<any> => {
    let response = await deleteRoomOrder(roomOrderId);
    revalidatePath(pathname);

}