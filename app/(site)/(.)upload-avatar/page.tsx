"use client";
import { loginAction } from '@/(api)/actions/loginAction';
import { uploadAvatarAction } from '@/(api)/actions/uploadAvatar';
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
type Props = {}

const page = (props: Props) => {
    const { useAppSelector, dispatch } = useRedux();
    const { user } = useAppSelector((state) => state.userReducer);
    const [photoThumb, setPhotoThumb] = React.useState<string>(user.avatar);
    const { state: { status, data, errors, message }, isSuccess, formAction, isPending } = useServerAction(uploadAvatarAction);
    const { pathname } = useRouting();
    useEffect(() => {
        if (isSuccess) {
            if (data) {
                saveLocalStorage(USER, data);
            }
            dispatch(setUser(data));
            dispatch(closeModal());
        }
    }, [isSuccess])

    return (
        <form action={formAction}>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
                <h1 className='text-xl  font-bold text-center '>Thay đổi ảnh đại diện</h1>

                <div className="flex flex-col items-center gap-2 my-3">
                    <div className="avatar">
                        <div className="w-24 rounded-full " >
                            <Image src={photoThumb as string} width={100} height={100} alt="avatar" />
                        </div>
                    </div>
                </div>
                <input type="hidden" name="pathname" defaultValue={pathname} />
                <input type="file" className='file-input file-input-secondary my-5' name="avatar" accept="image/*" onChange={(e) => setPhotoThumb(URL.createObjectURL(e.target.files![0]))} />
                {errors?.avatar && <p className='text-error'>{errors?.avatar}</p>}
                <div className='flex gap-2 justify-center items-center mb-5'>
                    <button className="btn btn-primary" disabled={isPending} type="submit">
                        {isPending ? <LoadingSpinner /> : 'Upload Avatar'}
                    </button>
                </div>
            </fieldset>
        </form>

    )
}

export default page