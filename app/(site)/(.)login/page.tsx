"use client";
import { loginAction } from '@/(api)/actions/loginAction';
import LoadingSpinner from '@/(component)/shared/UI/LoadingSpinner';
import PasswordInput from '@/(component)/shared/UI/PasswordInput';
import useRedux from '@/(hook)/useRedux';
import useServerAction from '@/(hook)/useServerAction';
import { closeModal, openModal } from '@/(redux)/reducer/modalReducer';
import { setUser } from '@/(redux)/reducer/userReducer';
import { saveLocalStorage, USER } from '@/utils/config';
import Link from 'next/link'
import React, { useEffect } from 'react'

type Props = {}

const page = (props: Props) => {
    const { state: { status, data, errors, message }, formAction, isPending } = useServerAction(loginAction);
    const { dispatch } = useRedux();

    useEffect(() => {
        console.log('status', status, data);
        if (status === 'success' && data) {
            if (data) {
                saveLocalStorage(USER, data);
            }
            dispatch(setUser(data));
            dispatch(closeModal());
        }
    }, [status])

    return (
        <form action={formAction}>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
                <h1 className='text-xl  font-bold text-center '> Đăng nhập</h1>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Điền email" name="email" defaultValue={data?.email} autoComplete="email" />
                <p className='text-error'>{errors?.email}</p>

                <label className="label">Mật Khẩu</label>
                <PasswordInput name="password" placeholder="Điền mật khẩu" defaultValue={data?.password} />
                <p className='text-error'>{errors?.password}</p>

                <div className='flex gap-2 justify-end items-center mt-2'>
                    <button className="btn btn-secondary" type="button" onClick={() => dispatch(openModal("REGISTER"))} >Đăng ký</button>
                    <button className="btn btn-primary" disabled={isPending} type="submit">
                        {isPending ? <LoadingSpinner /> : 'Đăng nhập'}
                    </button>
                </div>
            </fieldset>
        </form>

    )
}

export default page