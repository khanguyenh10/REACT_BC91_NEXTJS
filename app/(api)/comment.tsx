import { FormStateVM } from "@/(viewModel)/FormStateVM";
import { fetcher } from "./fetcher"
import { CommentSchema } from "./schemas";

export const getCommentsByRoomId = async (roomId: number) => {
    return fetcher(`/binh-luan/lay-binh-luan-theo-phong/${roomId}`);
}
export const postComment = async (commentData: any) => {
    return fetcher('/binh-luan/them-binh-luan', {
        method: 'POST',
        body: JSON.stringify(commentData),
    });
}

