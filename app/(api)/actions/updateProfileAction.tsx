"use server";
import { FormState } from "@/(hook)/useServerAction";
import { UserVM } from "@/(viewModel)/UserVM";
import { putUser } from "../user";
import { revalidatePath } from "next/cache";
import { ProfileSchema } from "../schemas";


export const updateProfileAction = async (prevState: FormState, formData: FormData): Promise<any> => {
    const validatedFields = ProfileSchema.safeParse(Object.fromEntries(formData));
    const data: any = Object.fromEntries(formData);
    console.log("data", validatedFields);
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Vui lòng kiểm tra lại',
            data: Object.fromEntries(formData)
        }
    }
    try {
        let response = await putUser(data.userId as number, data);
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