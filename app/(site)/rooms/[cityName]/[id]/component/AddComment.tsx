"use client";
import { addCommentAction } from '@/(api)/actions/comment-action';
import React, { useActionState } from 'react'

type Props = {}

const AddComment = (props: Props) => {
    const initialState = {
        message: '',
        errors: {}
    }
    const [{ message, errors }, formAction] = useActionState(addCommentAction, initialState);
    return (
        <form action={formAction}>
            <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Viết đánh giá của bạn..."
                name="content"
            />
            {errors?.content && <p className='text-error'>{errors.content}</p>}
            {message && <p className='text-warning'>{message}</p>}
            <button className="btn btn-primary mt-3">Add Comment</button>
        </form>
    )
}

export default AddComment