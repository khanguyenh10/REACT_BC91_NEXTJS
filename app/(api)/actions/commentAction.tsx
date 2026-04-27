"use server";

import { CommentSchema } from "../schemas";
import { fetcher } from "../fetcher";
import { postComment } from "../comment";
import { FormState } from "@/(hook)/useServerAction";
import { CommentVM } from "@/(viewModel)/CommentVM";
import { revalidatePath } from "next/cache";

export const addCommentAction = async (prevState: FormState, formData: FormData): Promise<FormState> => {
    const validatedFields = CommentSchema.safeParse(Object.fromEntries(formData));
    let data = Object.fromEntries(formData);
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Vui lòng kiểm tra lại các trường thông tin.',
        }
    }

    try {
        let postData: CommentVM = {
            maPhong: Number(data?.roomId as string),
            maNguoiBinhLuan: Number(data?.userId as string),
            ngayBinhLuan: data?.commentDate as string,
            noiDung: data?.content as string,
            saoBinhLuan: Number(data?.rating as string)
        }
        console.log("postData", postData);
        const response = await postComment(postData);
        console.log("response", response);

        revalidatePath(data.pathname as string);
        return prevState = {
            status: 'success',
            message: 'Bình luận đã được thêm thành công!',
        }
    } catch (error) {
        console.error('Error adding comment:', error);
        return prevState = {
            status: 'error',
            message: 'Đã có lỗi xảy ra khi thêm bình luận. Vui lòng thử lại sau.',
        }
    }
}