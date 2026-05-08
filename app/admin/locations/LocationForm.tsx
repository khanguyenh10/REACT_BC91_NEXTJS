import { userAction } from '@/(api)/actions/admin/userAction';
import LoadingSpinner from '@/(component)/shared/UI/LoadingSpinner';
import PasswordInput from '@/(component)/shared/UI/PasswordInput';
import useRedux from '@/(hook)/useRedux';
import useRouting from '@/(hook)/useRouting';
import useServerAction from '@/(hook)/useServerAction';
import { closeDrawser, DrawserState } from '@/(redux)/reducer/drawerReducer';
import React, { use, useEffect } from 'react'
import { toastError } from '@/utils/toast';
import LabelAction from '../components/LabelAction';
import Image from 'next/image';
import { locationAction } from '@/(api)/actions/admin/locationAction';
type Props = {}

const LocationForm = (props: Props) => {
    const { pathname } = useRouting();
    const { useAppSelector } = useRedux();
    const drawer: DrawserState = useAppSelector((state) => state.drawerReducer);
    const { action, dataDetail } = drawer;
    const [photoThumb, setPhotoThumb] = React.useState<string>(dataDetail?.hinhAnh || '');
    const [errorThumb, setErrorThumb] = React.useState<string>('');
    const { state: { status, data, errors }, formAction, isPending } = useServerAction(locationAction);
    const { dispatch } = useRedux();

    useEffect(() => {
        if (status === 'success' && data) {
            dispatch(closeDrawser());
        }
    }, [status])

    const checkFormAction = (payload: FormData) => {
        if (!photoThumb) {
            setErrorThumb('Vui lòng úp hình ảnh');
        } else {
            setErrorThumb('');
        }
        formAction(payload);
    }
    return (
        <form action={checkFormAction}>
            <fieldset className="fieldset rounded-box w-xs  p-4">
                <h1 className='text-xl  font-bold text-center '>
                    <LabelAction action={action} >
                        Vị trí
                    </LabelAction>
                </h1>
                <input type="hidden" name="id" defaultValue={dataDetail?.id || 0} />
                <input type="hidden" name="action" defaultValue={action?.toString()} />
                <input type="hidden" name="pathname" defaultValue={pathname} />
                <div className='thumb-wrapper'>
                    {photoThumb && <div className="thumb">
                        <div className="w-full" >
                            <Image src={photoThumb as string} width={200} height={100} alt="thumb" className='w-full' />
                        </div>
                    </div>}
                    {!photoThumb && <label className="label block">Hình ảnh</label>}
                    <label htmlFor='upload-thumb' className='btn btn-secondary btn-outline'>
                        <input id='upload-thumb' type="file" className='file-input file-input-secondary my-5 hidden' name="avatar" accept="image/*" onChange={(e) => setPhotoThumb(URL.createObjectURL(e.target.files![0]))} />
                        +
                    </label>
                    <p className='text-error'>{errorThumb}</p>
                </div>

                <div>
                    <label className="label">Tên</label>
                    <input type="text" className="input" placeholder="Điền tên vị trí" name="name" defaultValue={data?.name || dataDetail?.name} />
                    <p className='text-error'>{errors?.name}</p>
                </div>
                <div>
                    <label className="label">Tỉnh thành</label>
                    <input type="text" className="input" placeholder="Điền tỉnh thành" name="country" defaultValue={data?.country || dataDetail?.country} />
                    <p className='text-error'>{errors?.country}</p>
                </div>
                <div>
                    <label className="label">Quốc gia</label>
                    <input type="text" className="input" placeholder="Điền quốc gia" name="nation" defaultValue={data?.nation || dataDetail?.nation} />
                    <p className='text-error'>{errors?.nation}</p>
                </div>
                <div className='flex gap-2 justify-end items-center mt-2'>
                    <button className="btn btn-primary" disabled={isPending}>
                        {isPending && <LoadingSpinner />}
                        <LabelAction action={action} > Vị trí</LabelAction>
                    </button>
                </div>
            </fieldset>
        </form>
    )
}

export default LocationForm