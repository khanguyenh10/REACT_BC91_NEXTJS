import { registerAction } from '@/(api)/actions/registerAction';
import LoadingSpinner from '@/(component)/shared/UI/LoadingSpinner';
import PasswordInput from '@/(component)/shared/UI/PasswordInput';
import useRedux from '@/(hook)/useRedux';
import useServerAction from '@/(hook)/useServerAction';
import { closeModal, openModal } from '@/(redux)/reducer/modalReducer';
import React, { useEffect } from 'react'

type Props = {}

const page = (props: Props) => {
    const { state: { status, data, errors }, formAction, isPending } = useServerAction(registerAction);
    const { dispatch } = useRedux();

    useEffect(() => {
        if (status === 'success' && data) {
            dispatch(openModal('LOGIN'));
        }
    }, [status])
    return (
        <form action={formAction}>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
                <h1 className='text-xl  font-bold text-center '> Đăng ký</h1>
                <div>
                    <label className="label">Tên</label>
                    <input type="text" className="input" placeholder="Điền tên người dùng" name="name" defaultValue={data?.name} />
                    <p className='text-error'>{errors?.name}</p>
                </div>
                <div>
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Điền email" name="email" defaultValue={data?.email} autoComplete="email" />
                    <p className='text-error'>{errors?.email}</p>
                </div>
                <div>
                    <label className="label">Mật khẩu</label>
                    <PasswordInput name="password" placeholder="Điền mật khẩu" defaultValue={data?.password} />
                    <p className='text-error'>{errors?.password}</p>
                </div>
                <div>
                    <label className="label">Điện thoại</label>
                    <input type="tel" className="input" placeholder="Điền số điện thoại" name="phone" defaultValue={data?.phone} />
                    <p className='text-error'>{errors?.phone}</p>
                </div>
                <div>
                    <label className="label">Ngày sinh</label>
                    <input type="date" className="input" placeholder="Điền ngày sinh" name="birthday" defaultValue={data?.birthday} />
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
                                defaultChecked={data?.gender === "true" || true}
                            />
                            <span className="label-text">Nam</span>
                        </label>

                        <label className="label cursor-pointer gap-2">
                            <input
                                type="radio"
                                name="gender"
                                value="false"
                                className="radio radio-primary"
                                defaultChecked={data?.gender === "false"}
                            />
                            <span className="label-text">Nữ</span>
                        </label>
                    </div>
                </div>
                <div className='flex gap-2 justify-end items-center mt-2'>
                    <button className="btn btn-secondary" type="button" onClick={() => dispatch(openModal("LOGIN"))} >Đăng nhập </button>
                    <button className="btn btn-primary" disabled={isPending}>
                        {isPending && <LoadingSpinner />}
                        Đăng ký
                    </button>
                </div>
            </fieldset>
        </form>
    )
}

export default page

