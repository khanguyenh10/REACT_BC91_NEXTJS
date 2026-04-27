"use client";
import { addCommentAction } from '@/(api)/actions/commentAction';
import useRedux from '@/(hook)/useRedux';
import useRouting from '@/(hook)/useRouting';
import useServerAction from '@/(hook)/useServerAction';
import { RoomVM } from '@/(viewModel)/RoomVM';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import dayjs from 'dayjs';
import React, { useActionState } from 'react'

type Props = {
    room: RoomVM;
}

const AddComment = ({ room }: Props) => {
    const { state: { message, errors }, formAction } = useServerAction(addCommentAction);
    const { useAppSelector } = useRedux();
    const { user } = useAppSelector((state) => state.userReducer);
    const { pathname } = useRouting();
    return (
        <form action={formAction}>
            <div>
                <UserCircleIcon className="w-10 h-10 inline-block" />
                <span className="text-lg font-semibold ml-2">{user?.name}</span>
            </div>
            <div className="rating my-2">
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" aria-label="1 star" defaultValue={1} />
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" aria-label="2 star"
                    defaultValue={2}
                    defaultChecked
                />
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" aria-label="3 star"
                    defaultValue={3}
                />
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" aria-label="4 star"
                    defaultValue={4}
                />
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" aria-label="5 star"
                    defaultValue={5} />
            </div>
            <input type="hidden" name="roomId" defaultValue={room.id} />
            <input type="hidden" name="commentDate" defaultValue={dayjs().format('YYYY-MM-DD')} />
            <input type="hidden" name="userId" defaultValue={user?.id} />
            <input type="hidden" name="pathname" defaultValue={pathname} />
            <textarea
                className="textarea textarea-bordered w-full h-24"
                placeholder="Viết đánh giá của bạn..."
                name="content"
                defaultValue=""
            />
            {errors?.content && <p className='text-error'>{errors.content}</p>}
            <button className="btn btn-primary mt-3">Add Comment</button>
        </form>
    )
}

export default AddComment