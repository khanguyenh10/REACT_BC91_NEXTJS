"use server";
import { FormState } from "@/(hook)/useServerAction";

import { toBoolean } from "@/utils/text";
import { LocationSchema, RoomSchema } from "@/(api)/schemas";
import { postUser, putUser } from "@/(api)/user";
import { revalidatePath } from "next/cache";
import { deleteLocation, postLocation, postLocationThumb, putLocation } from "@/(api)/location";
import { LocationVM } from "@/(viewModel)/LocationVM";
import { RoomVM } from "@/(viewModel)/RoomVM";
import { deleteRoom, postRoom, postRoomThumb, putRoom } from "@/(api)/room";


export const roomAction = async (prevState: FormState, formData: FormData): Promise<any> => {
    let validatedFields: any = RoomSchema.safeParse(Object.fromEntries(formData));
    const data = Object.fromEntries(formData);
    const action = data.action as string;
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Vui lòng kiểm tra lại các trường thông tin.',
            data: Object.fromEntries(formData)
        }
    }
    try {
        const postData: RoomVM = {
            tenPhong: data.name as string,
            khach: parseInt(data.quantity as string),
            phongNgu: parseInt(data.roomNumber as string),
            giuong: parseInt(data.bedNumber as string),
            phongTam: parseInt(data.bathNumber as string),
            moTa: data.description as string,
            giaTien: parseInt(data.price as string),
            mayGiat: toBoolean(data.wash),
            banLa: toBoolean(data.iron),
            tivi: toBoolean(data.tv),
            dieuHoa: toBoolean(data.air),
            wifi: toBoolean(data.wifi),
            bep: toBoolean(data.cook),
            doXe: toBoolean(data.park),
            hoBoi: toBoolean(data.pool),
            maViTri: parseInt(data.locationId as string)
        };
        console.log("postData", data);

        if (action == 'ADD') {
            let response = await postRoom(postData);
            let { id } = response?.content as RoomVM;
            let responseThumb = await postRoomThumb(data.thumb as File, id as number);
        } else {
            let id = data.id as string;
            if ((data.thumb instanceof File && data.thumb.size > 0)) {
                let responseThumb = await postRoomThumb(data.thumb as File, parseInt(id));
            }
            let response = await putRoom(parseInt(id), postData);
        }
        revalidatePath(data.pathname as string);
        return prevState = {
            status: "success",
            message: `${action == 'ADD' ? 'Thêm' : 'Cập nhật'} thành công`,
            data: data
        }
    } catch (error: any) {
        console.error('Error :', error);
        return prevState = {
            status: "error",
            message: JSON.parse(error.message as string).content || 'Thực hiện thất bại',
            data: data
        }
    }
}



export const removeRoomAction = async (roomId: number, pathname: string): Promise<any> => {
    let response = await deleteRoom(roomId);
    revalidatePath(pathname);

}