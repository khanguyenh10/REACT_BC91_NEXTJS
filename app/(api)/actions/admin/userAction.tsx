"use server";
import { FormState } from "@/(hook)/useServerAction";
import { UserVM } from "@/(viewModel)/UserVM";
import { setCookie } from "@/utils/cookieServer";
import { ACCESSTOKEN, USER } from "@/utils/config";
import { toBoolean } from "@/utils/text";
import { ProfileSchema, RegisterSchema } from "@/(api)/schemas";
import { deleteUser, postUser, putUser } from "@/(api)/user";
import { revalidatePath } from "next/cache";
import { toastError, toastSuccess } from "@/utils/toast";


export const userAction = async (prevState: FormState, formData: FormData): Promise<any> => {
    let validatedFields: any = RegisterSchema.safeParse(Object.fromEntries(formData));
    const data = Object.fromEntries(formData);
    const action = data.action as string;
    if (action == 'EDIT') {
        validatedFields = ProfileSchema.safeParse(Object.fromEntries(formData));
    }

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Vui lòng kiểm tra lại các trường thông tin.',
            data: Object.fromEntries(formData)
        }
    }
    try {
        const postData: UserVM = {
            name: data.name as string,
            email: data.email as string,
            phone: data.phone as string,
            birthday: data.birthday as string,
            gender: toBoolean(data.gender),
            role: data.role as 'USER' | 'ADMIN',
        };
        if (action == 'ADD') {
            postData.password = data.password as string;
        } else if (action == 'EDIT') {
            postData.id = parseInt(data.id as string);

        }
        console.log("postData", postData);
        if (action == 'ADD') {
            let response = await postUser(postData);
        } else {

            let response = await putUser(postData.id as number, postData);
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

export const removeUserAction = async (userId: number, pathname: string): Promise<any> => {
    console.log(userId, pathname);
    let response = await deleteUser(userId);
    revalidatePath(pathname);

}