"use server";
import { FormState } from "@/(hook)/useServerAction";
import { RegisterSchema } from "../schemas";
import { postSignIn, postSignUp } from "../auth";
import { UserVM } from "@/(viewModel)/UserVM";
import { setCookie } from "@/utils/cookieServer";
import { ACCESSTOKEN, USER } from "@/utils/config";
import { toBoolean } from "@/utils/text";


export const registerAction = async (prevState: FormState, formData: FormData): Promise<any> => {
    const validatedFields = RegisterSchema.safeParse(Object.fromEntries(formData));
    const data = Object.fromEntries(formData);
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
            password: data.password as string,
            phone: data.phone as string,
            birthday: data.birthday as string,
            avatar: '',
            gender: toBoolean(data.gender),
            role: 'USER',
        };
        console.log("postData", postData);
        let response = await postSignUp(postData);
        return prevState = {
            status: "success",
            message: 'Đăng ký thành công ',
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