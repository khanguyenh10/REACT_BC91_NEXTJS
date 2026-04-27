import { getCommentsByRoomId } from '@/(api)/comment';
import { CommentVM } from '@/(viewModel)/CommentVM';
import { ResponseData } from '@/(viewModel)/ResponseData';
import React from 'react'
import Image from 'next/image';
import dayjs from 'dayjs';
import AddComment from './AddComment';
import { CommentVMByRoomID } from '@/(viewModel)/CommentVMByRoomID';
import { RoomVM } from '@/(viewModel)/RoomVM';
import { UserCircleIcon } from '@heroicons/react/16/solid';
type Props = {
    comments: CommentVMByRoomID[];
    room: RoomVM;
}

const Comments = async (props: Props) => {
    const { comments, room } = props
    return (
        <div className="mt-10" id="comments">
            <h3 className="text-xl font-semibold mb-4">Đánh giá</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[200px] overflow-y-auto pr-2">
                {comments.reverse().map((comment, i) => (
                    <div key={i} className="flex gap-3 items-start">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <Image width={100} height={100} src={comment.avatar || '/user-icon.png'} alt="" />
                            </div>
                        </div>
                        <div>
                            <p className="font-medium"> {comment.tenNguoiBinhLuan}</p>
                            <p className="text-xs text-gray-500">{dayjs(comment.ngayBinhLuan).format('DD/MM/YYYY')} </p>
                            <p className="text-sm mt-1 text-gray-700">
                                {comment.noiDung}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <AddComment room={room} />
            </div>
        </div>

    )
}

export default Comments