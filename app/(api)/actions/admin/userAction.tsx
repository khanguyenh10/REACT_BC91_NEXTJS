"use server";
import { FormState } from "@/(hook)/useServerAction";
import { UserVM } from "@/(viewModel)/UserVM";
import { setCookie } from "@/utils/cookieServer";
import { ACCESSTOKEN, USER } from "@/utils/config";
import { toBoolean } from "@/utils/text";
import { UserSchema } from "@/(api)/schemas";
import { postUser } from "@/(api)/user";


export const userAction = async (prevState: FormState, formData: FormData): Promise<any> => {
    const validatedFields = UserSchema.safeParse(Object.fromEntries(formData));
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
        const postData: UserVM = {
            id: Number(data.id),
            name: data.name as string,
            email: data.email as string,
            phone: data.phone as string,
            birthday: data.birthday as string,
            gender: toBoolean(data.gender),
            role: data.role as 'USER' | 'ADMIN',
        };
        console.log("postData", postData);
        let response = await postUser(postData);
        return prevState = {
            status: "success",
            message: `${action == 'ADD' ? 'Thêm' : 'Cập nhật'} thành công`,
            data: data
        }
    } catch (error: any) {
        console.error('Error :', error);
        return prevState = {
            status: "error",
            message: JSON.parse(error.message as string).content,
            data: data
        }
    }
}