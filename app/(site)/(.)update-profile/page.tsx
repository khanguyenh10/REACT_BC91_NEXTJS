"use client";
import LoadingSpinner from '@/(component)/shared/UI/LoadingSpinner';
import PasswordInput from '@/(component)/shared/UI/PasswordInput';
import useRedux from '@/(hook)/useRedux';
import useServerAction from '@/(hook)/useServerAction';
import { closeModal, openModal } from '@/(redux)/reducer/modalReducer';
import { setUser } from '@/(redux)/reducer/userReducer';
import { saveLocalStorage, USER } from '@/utils/config';
import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image';
import useRouting from '@/(hook)/useRouting';
import { updateProfileAction } from '@/(api)/actions/updateProfileAction';
import { limitAge } from '@/utils/text';
type Props = {}

const page = (props: Props) => {
    const { useAppSelector, dispatch } = useRedux();
    const { user } = useAppSelector((state) => state.userReducer);
    const { state: { status, data, errors, message }, isSuccess, formAction, isPending } = useServerAction(updateProfileAction);
    const { pathname } = useRouting();
    useEffect(() => {
        if (isSuccess) {
            if (data) {
                saveLocalStorage(USER, data);
            }
            dispatch(setUser(data));
            dispatch(closeModal());
        }
    }, [isSuccess]);

    useEffect(() => {
        limitAge('birthday');
    }, [])

    return (
        <form action={formAction}>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
                <h1 className='text-xl  font-bold text-center '>Chỉnh sửa hồ sơ</h1>

                <div>
                    <label className="label">Tên</label>
                    <input type="text" className="input" placeholder="Điền tên người dùng" name="name" defaultValue={data?.name || user.name} />
                    <p className='text-error'>{errors?.name}</p>
                </div>
                <div>
                    <label className="label">Email</label>
                    <input type="email" readOnly className="input" placeholder="Điền email" name="email" defaultValue={data?.email || user.email} autoComplete="email" />
                    <p className='text-error'>{errors?.email}</p>
                </div>
                <div>
                    <label className="label">Điện thoại</label>
                    <input type="tel" className="input" placeholder="Điền số điện thoại" name="phone" defaultValue={data?.phone || user.phone} />
                    <p className='text-error'>{errors?.phone}</p>
                </div>
                <div>
                    <label className="label">Ngày sinh</label>
                    <input type="date" className="input" placeholder="Điền ngày sinh" name="birthday" defaultValue={data?.birthday || user.birthday} id="birthday" />
                    <p className='text-error'>{errors?.birthday}</p>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Giới tính</span>
                    </label>

                    <div className="flex gap-6">
                        <label className="label cursor-pointer gap-2">
                            <input
                                type="radio"
                                name="gender"
                                value="true"
                                className="radio radio-primary"
                                defaultChecked={data?.gender === "true" || user.gender.toString() === "true"}
                            />
                            <span className="label-text">Nam</span>
                        </label>

                        <label className="label cursor-pointer gap-2">
                            <input
                                type="radio"
                                name="gender"
                                value="false"
                                className="radio radio-primary"
                                defaultChecked={data?.gender === "false" || user.gender.toString() === "false"}
                            />
                            <span className="label-text">Nữ</span>
                        </label>
                    </div>
                </div>
                <input type="hidden" name="pathname" defaultValue={pathname} />
                <input type="hidden" name="userId" defaultValue={user.id} />
                {errors?.avatar && <p className='text-error'>{errors?.avatar}</p>}
                <div className='flex gap-2 justify-center items-center mb-5'>
                    <button className="btn btn-primary" disabled={isPending} type="submit">
                        {isPending ? <LoadingSpinner /> : 'Cập nhật'}
                    </button>
                </div>
            </fieldset>
        </form>

    )
}

export default page