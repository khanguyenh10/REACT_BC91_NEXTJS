"use server";
import { FormState } from "@/(hook)/useServerAction";
import { AvatarSchema } from "../schemas";
import { UserVM } from "@/(viewModel)/UserVM";
import { setCookie } from "@/utils/cookieServer";
import { ACCESSTOKEN, USER } from "@/utils/config";
import { postAvatar } from "../user";
import { revalidatePath } from "next/cache";


export const uploadAvatarAction = async (prevState: FormState, formData: FormData): Promise<any> => {
    const validatedFields = AvatarSchema.safeParse(Object.fromEntries(formData));
    const data = Object.fromEntries(formData);
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Vui lòng kiểm tra lại',
            data: Object.fromEntries(formData)
        }
    }
    try {
        let response = await postAvatar(data.avatar as File);
        const content = response?.content as UserVM;

        revalidatePath(data.pathname as string);
        return prevState = {
            status: "success",
            message: 'Cập nhật thành công ',
            data: content
        }
    } catch (error) {
        console.log("error", error);
        return prevState = {
            status: "error",
            message: 'Cập nhật thất bại',
        }
    }
}