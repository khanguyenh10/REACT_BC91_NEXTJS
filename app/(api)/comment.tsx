import { CommentVM } from "@/(viewModel)/CommentVM";
import { fetcher } from "./fetcher"
import { CommentSchema } from "./schemas";
import { CommentVMByRoomID } from "@/(viewModel)/CommentVMByRoomID";
import { ResponseData } from "@/(viewModel)/ResponseData";


export const getComments = async (roomId: number): Promise<ResponseData<CommentVM[]>> => {
    return fetcher(`/binh-luan`);
}
export const postComment = async (data: CommentVM) => {
    return fetcher('/binh-luan', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}
export const putComment = async (commentId: number, data: CommentVM) => {
    return fetcher(`/binh-luan/${commentId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
}
export const deleteComment = async (commentId: number) => {
    return fetcher(`/binh-luan/${commentId}`, {
        method: 'DELETE',
        body: null,
    });
}

export const getCommentsByRoomId = async (roomId: number): Promise<ResponseData<CommentVMByRoomID[]>> => {
    return fetcher(`/binh-luan/lay-binh-luan-theo-phong/${roomId}`);
}
