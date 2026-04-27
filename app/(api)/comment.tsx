import { CommentVM } from "@/(viewModel)/CommentVM";
import { fetcher } from "./fetcher"
import { CommentSchema } from "./schemas";
import { CommentVMByRoomID } from "@/(viewModel)/CommentVMByRoomID";
import { ResponseData } from "@/(viewModel)/ResponseData";

export const getCommentsByRoomId = async (roomId: number): Promise<ResponseData<CommentVMByRoomID[]>> => {
    return fetcher(`/binh-luan/lay-binh-luan-theo-phong/${roomId}`);
}
export const postComment = async (data: CommentVM) => {
    return fetcher('/binh-luan', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}

