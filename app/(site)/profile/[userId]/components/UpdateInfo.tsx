"use client";
import { UserVM } from '@/(viewModel)/UserVM'
import React, { useEffect } from 'react'
import Image from 'next/image'
import useRedux from '@/(hook)/useRedux';
import { openModal } from '@/(redux)/reducer/modalReducer';
import dayjs from 'dayjs';
import { setUserAvatar } from '@/(redux)/reducer/userReducer';
type Props = {
    user: UserVM
    userCreatedAt: string
}

const UpdateInfo = ({ user, userCreatedAt }: Props) => {
    const { dispatch } = useRedux();

    // update avatar
    useEffect(() => {
        if (user.avatar) dispatch(setUserAvatar(user.avatar))
    }, [user.avatar])
    return (
        <div className="card bg-base-100 shadow-md p-4">

            <div className="flex flex-col items-center gap-2">
                <div className="avatar">
                    <div className="w-24 rounded-full " >
                        <Image src={user.avatar as string} width={100} height={100} alt="avatar" />
                    </div>
                </div>
                <button className="btn btn-link text-sm" onClick={() => dispatch(openModal("UPLOAD_AVATAR"))}>
                    Cập nhật ảnh
                </button>
            </div>

            <div className="mb-6">
                <h1 className="text-2xl font-bold">
                    Xin chào, tôi là {user.name}
                </h1>
                <p className="text-sm text-gray-500">
                    Bắt đầu tham gia vào {dayjs(userCreatedAt).format("DD/MM/YYYY")}
                </p>
                <button className="btn btn-link p-0 mt-1" onClick={() => dispatch(openModal("UPDATE_PROFILE"))}>
                    Chỉnh sửa hồ sơ
                </button>
            </div>
        </div>
    )
}

export default UpdateInfo

