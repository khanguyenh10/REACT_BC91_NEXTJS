"use server";
import { FormState } from "@/(hook)/useServerAction";
import { LoginSchema } from "../schemas";
import { postSignIn } from "../auth";
import { UserVM } from "@/(viewModel)/UserVM";
import { setCookie } from "@/utils/cookieServer";
import { ACCESSTOKEN, USER } from "@/utils/config";


export const loginAction = async (prevState: FormState, formData: FormData): Promise<any> => {
    const validatedFields = LoginSchema.safeParse(Object.fromEntries(formData));
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Vui lòng kiểm tra lại các trường thông tin.',
            data: Object.fromEntries(formData)
        }
    }
    try {
        let response = await postSignIn(validatedFields.data);
        let { token, user } = response?.content as { token: string, user: UserVM };
        setCookie(ACCESSTOKEN, token);
        return prevState = {
            status: "success",
            message: 'Đăng nhập thành công ',
            data: user
        }
    } catch (error) {
        return prevState = {
            status: "error",
            message: 'Email và mật khẩu không đúng',
            data: Object.fromEntries(formData)
        }
    }
}