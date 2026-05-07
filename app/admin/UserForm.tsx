import { userAction } from '@/(api)/actions/admin/userAction';
import LoadingSpinner from '@/(component)/shared/UI/LoadingSpinner';
import PasswordInput from '@/(component)/shared/UI/PasswordInput';
import useRedux from '@/(hook)/useRedux';
import useRouting from '@/(hook)/useRouting';
import useServerAction from '@/(hook)/useServerAction';
import { closeDrawser, DrawserState } from '@/(redux)/reducer/drawerReducer';
import React, { use, useEffect } from 'react'
import LabelAction from './components/LabelAction';
import { toastError } from '@/utils/toast';

type Props = {}

const UserForm = (props: Props) => {
    const { pathname } = useRouting();
    const { useAppSelector } = useRedux();
    const drawer: DrawserState = useAppSelector((state) => state.drawerReducer);
    const { action, dataDetail } = drawer;
    const { state: { status, data, errors }, formAction, isPending } = useServerAction(userAction);
    const { dispatch } = useRedux();

    useEffect(() => {
        if (status === 'success' && data) {
            dispatch(closeDrawser());
        }
    }, [status])
    return (
        <form action={formAction}>
            <fieldset className="fieldset rounded-box w-xs  p-4">
                <h1 className='text-xl  font-bold text-center '>
                    <LabelAction action={action} >
                        Người dùng
                    </LabelAction>
                </h1>
                <input type="hidden" name="id" defaultValue={dataDetail?.id || 0} />
                <input type="hidden" name="action" defaultValue={action?.toString()} />
                <input type="hidden" name="pathname" defaultValue={pathname} />
                <div>
                    <label className="label">Tên</label>
                    <input type="text" className="input" placeholder="Điền tên người dùng" name="name" defaultValue={data?.name || dataDetail?.name} />
                    <p className='text-error'>{errors?.name}</p>
                </div>
                <div>
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Điền email" name="email" defaultValue={data?.email || dataDetail?.email} autoComplete="email" />
                    <p className='text-error'>{errors?.email}</p>
                </div>
                {action === "ADD" && <div>
                    <label className="label">Mật khẩu</label>
                    <PasswordInput name="password" placeholder="Điền mật khẩu" defaultValue={data?.password || dataDetail?.password} />
                    <p className='text-error'>{errors?.password}</p>
                </div>}
                <div>
                    <label className="label">Điện thoại</label>
                    <input type="tel" className="input" placeholder="Điền số điện thoại" name="phone" defaultValue={data?.phone || dataDetail?.phone} />
                    <p className='text-error'>{errors?.phone}</p>
                </div>
                <div>
                    <label className="label">Ngày sinh</label>
                    <input type="date" className="input" placeholder="Điền ngày sinh" name="birthday" defaultValue={data?.birthday || dataDetail?.birthday} />
                    <p className='text-error'>{errors?.birthday}</p>
                </div>
                <div>
                    <label className="label">Giới tính</label>
                    <select className="select select-bordered" name="gender" defaultValue={data?.gender || dataDetail?.gender}>
                        <option value="true">Nam</option>
                        <option value="false">Nữ</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Chức vụ</span>
                    </label>

                    <div className="flex gap-6">
                        <label className="label cursor-pointer gap-2">
                            <input
                                type="radio"
                                name="role"
                                value="ADMIN"
                                className="radio radio-primary"
                                defaultChecked={data?.role === "ADMIN" || dataDetail?.role === "ADMIN" || true}
                            />
                            <span className="label-text">Admin</span>
                        </label>

                        <label className="label cursor-pointer gap-2">
                            <input
                                type="radio"
                                name="role"
                                value="USER"
                                className="radio radio-primary"
                                defaultChecked={data?.role === "USER" || dataDetail?.role === "USER"}
                            />
                            <span className="label-text">User</span>
                        </label>
                    </div>
                </div>
                <div className='flex gap-2 justify-end items-center mt-2'>
                    <button className="btn btn-primary" disabled={isPending}>
                        {isPending && <LoadingSpinner />}
                        <LabelAction action={action} > Người dùng</LabelAction>
                    </button>
                </div>
            </fieldset>
        </form>
    )
}

export default UserForm