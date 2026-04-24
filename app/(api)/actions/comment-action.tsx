"use server";

import { FormStateVM } from "@/(viewModel)/FormStateVM";
import { CommentSchema } from "../schemas";
import { fetcher } from "../fetcher";
import { postComment } from "../comment";

export const addCommentAction = async (prevState: FormStateVM, formData: FormData): Promise<FormStateVM> => {
    const validatedFields = CommentSchema.safeParse(Object.fromEntries(formData));

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Vui lòng kiểm tra lại các trường thông tin.',
        }
    }
    console.log('Validated Fields:', validatedFields.data);
    try {
        const response = await postComment(validatedFields.data);
        return {
            message: 'Bình luận đã được thêm thành công!',
        }
    } catch (error) {
        console.error('Error adding comment:', error);
        return {
            message: 'Đã có lỗi xảy ra khi thêm bình luận. Vui lòng thử lại sau.',
        }
    }
}