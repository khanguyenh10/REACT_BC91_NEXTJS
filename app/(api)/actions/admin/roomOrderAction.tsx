"use server";
import { FormState } from "@/(hook)/useServerAction";

import { toBoolean } from "@/utils/text";
import { LocationSchema } from "@/(api)/schemas";
import { postUser, putUser } from "@/(api)/user";
import { revalidatePath } from "next/cache";
import { deleteLocation, postLocation, postLocationThumb, putLocation } from "@/(api)/location";
import { LocationVM } from "@/(viewModel)/LocationVM";
import { RoomVM } from "@/(viewModel)/RoomVM";
import { deleteRoom } from "@/(api)/room";
import { deleteRoomOrder } from "@/(api)/roomOrder";


export const roomOrderAction = async (prevState: FormState, formData: FormData): Promise<any> => {
    // let validatedFields: any = LocationSchema.safeParse(Object.fromEntries(formData));
    // const data = Object.fromEntries(formData);
    // const action = data.action as string;
    // if (!validatedFields.success) {
    //     return {
    //         errors: validatedFields.error.flatten().fieldErrors,
    //         message: 'Vui lòng kiểm tra lại các trường thông tin.',
    //         data: Object.fromEntries(formData)
    //     }
    // }
    // try {
    //     const postData: RoomVM = {
    //         tenPhong: data.name as string,
    //         tinhThanh: data.country as string,
    //         quocGia: data.nation as string,
    //     };

    //     if (action == 'ADD') {
    //         let response = await postLocation(postData);
    //         let { id } = response?.content as LocationVM;
    //         let responseThumb = await postLocationThumb(data.thumb as File, id as number);
    //     } else {
    //         let id = data.id as string;
    //         if ((data.thumb instanceof File && data.thumb.size > 0)) {
    //             let responseThumb = await postLocationThumb(data.thumb as File, parseInt(id));
    //         }
    //         let response = await putLocation(parseInt(id), postData);
    //     }
    //     revalidatePath(data.pathname as string);
    //     return prevState = {
    //         status: "success",
    //         message: `${action == 'ADD' ? 'Thêm' : 'Cập nhật'} thành công`,
    //         data: data
    //     }
    // } catch (error: any) {
    //     console.error('Error :', error);
    //     return prevState = {
    //         status: "error",
    //         message: JSON.parse(error.message as string).content || 'Thực hiện thất bại',
    //         data: data
    //     }
    // }
}



export const removeRoomOrderAction = async (roomOrderId: number, pathname: string): Promise<any> => {
    let response = await deleteRoomOrder(roomOrderId);
    revalidatePath(pathname);

}