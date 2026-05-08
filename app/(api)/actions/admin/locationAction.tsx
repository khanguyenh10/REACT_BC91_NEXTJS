"use server";
import { FormState } from "@/(hook)/useServerAction";

import { toBoolean } from "@/utils/text";
import { LocationSchema } from "@/(api)/schemas";
import { postUser, putUser } from "@/(api)/user";
import { revalidatePath } from "next/cache";
import { deleteLocation, postLocation, postLocationThumb, putLocation } from "@/(api)/location";
import { LocationVM } from "@/(viewModel)/LocationVM";


export const locationAction = async (prevState: FormState, formData: FormData): Promise<any> => {
    let validatedFields: any = LocationSchema.safeParse(Object.fromEntries(formData));
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
        const postData: LocationVM = {
            tenViTri: data.name as string,
            tinhThanh: data.country as string,
            quocGia: data.nation as string,
        };

        if (action == 'ADD') {
            let response = await postLocation(postData);
            let { id } = response?.content as LocationVM;
            let responseThumb = await postLocationThumb(data.thumb as File, id as number);
        } else {
            if ((data.thumb instanceof File)) {
                let responseThumb = await postLocationThumb(data.thumb as File, postData.id as number);
            }
            let response = await putLocation(postData.id as number, postData);
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



export const removeLocationAction = async (locationId: number, pathname: string): Promise<any> => {
    console.log(locationId, pathname);
    let response = await deleteLocation(locationId);
    revalidatePath(pathname);

}