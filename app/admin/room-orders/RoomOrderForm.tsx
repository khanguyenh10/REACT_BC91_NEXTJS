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
import ToggleCheckbox from '../components/ToggleCheckbox';
import { roomAction } from '@/(api)/actions/admin/roomAction';
import { toBoolean } from '@/utils/text';
type Props = {}

const RoomOrderForm = (props: Props) => {
    const { pathname } = useRouting();
    const { useAppSelector } = useRedux();
    const drawer: DrawserState = useAppSelector((state) => state.drawerReducer);
    const { action, dataDetail } = drawer;
    const [photoThumb, setPhotoThumb] = React.useState<string>(dataDetail?.hinhAnh || '');
    const [errorThumb, setErrorThumb] = React.useState<string>('');
    const { state: { status, data, errors }, formAction, isPending } = useServerAction(roomAction);
    const { dispatch } = useRedux();

    useEffect(() => {
        if (status === 'success' && data) {
            dispatch(closeDrawser());
        }
    }, [status])

    const checkFormAction = (payload: FormData) => {
        if (!photoThumb) {
            setErrorThumb('Vui lòng úp hình ảnh');
            return;
        } else {
            setErrorThumb('');
        }
        formAction(payload);
    }
    return (
        <form action={checkFormAction}>
            <fieldset className="fieldset rounded-box   p-4 max-w-[400px]">
                <h1 className='text-xl  font-bold text-center '>
                    <LabelAction action={action} >
                        Phòng
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
                    <label htmlFor='upload-thumb' className='btn btn-secondary btn-outline my-2'>
                        <input id='upload-thumb' type="file" className='file-input file-input-secondary my-5 hidden' name="thumb" accept="image/*" onChange={(e) => setPhotoThumb(URL.createObjectURL(e.target.files![0]))} />
                        +
                    </label>
                    <p className='text-error'>{errorThumb}</p>
                </div>
                <div className=' grid md:grid-cols-2 gap-4 '>
                    <div>
                        <label className="label">Tên phòng</label>
                        <input type="text" className="input" placeholder="Điền tên phòng" name="name" defaultValue={data?.name || dataDetail?.tenPhong} autoComplete="name" />
                        <p className='text-error'>{errors?.name}</p>
                    </div>
                    <div>
                        <label className="label">Mô tả</label>
                        <input type="text" className="input" placeholder="Mô tả" name="description" defaultValue={data?.name || dataDetail?.moTa} autoComplete="description" />
                        <p className='text-error'>{errors?.description}</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label className="label">Vị trí</label>
                        <select className="select select-bordered" name="locationId" defaultValue={data?.location || dataDetail?.maViTri}>
                            {dataDetail?.locations?.map((item: any) => <option key={item.id} value={item.id}>{item.tenViTri}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="label">Số khách</label>
                        <input type="number" className="input" placeholder="Số khách" name="quantity" defaultValue={data?.quantity || dataDetail?.khach} autoComplete="quantity" />
                        <p className='text-error'>{errors?.quantity}</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label className="label">Số phòng ngủ</label>
                        <input type="number" className="input" placeholder="Số phòng ngủ" name="roomNumber" defaultValue={data?.roomNumber || dataDetail?.phongNgu} autoComplete="roomNumber" />
                        <p className='text-error'>{errors?.roomNumber}</p>
                    </div>
                    <div>
                        <label className="label">Số giường</label>
                        <input type="number" className="input" placeholder="Số giường" name="bedNumber" defaultValue={data?.bedNumber || dataDetail?.giuong} autoComplete="bedNumber" />
                        <p className='text-error'>{errors?.bedNumber}</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label className="label">Số phòng tắm</label>
                        <input type="number" className="input" placeholder="Số phòng ngủ" name="bathNumber" defaultValue={data?.bathNumber || dataDetail?.phongTam} autoComplete="bathNumber" />
                        <p className='text-error'>{errors?.bathNumber}</p>
                    </div>
                    <div>
                        <label className="label">Giá phòng</label>
                        <input type="number" className="input" placeholder="Đơn vị $" name="price" defaultValue={data?.price || dataDetail?.giaTien} autoComplete="price" />
                        <p className='text-error'>{errors?.price}</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-4'>
                    <div>
                        <label className="label block mb-2">Máy giặt</label>
                        <ToggleCheckbox name="wash" isChecked={data?.wash || dataDetail?.mayGiat} />
                    </div>
                    <div>
                        <label className="label block mb-2">Bàn là</label>
                        <ToggleCheckbox name="iron" isChecked={data?.iron || dataDetail?.banLa} />
                    </div>
                    <div>
                        <label className="label block mb-2">Ti vi</label>
                        <ToggleCheckbox name="tv" isChecked={data?.tv || dataDetail?.tiVi} />
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-4'>
                    <div>
                        <label className="label block mb-2">Điều hòa</label>
                        <ToggleCheckbox name="air" isChecked={data?.air || dataDetail?.dieuHoa} />
                    </div>
                    <div>
                        <label className="label block mb-2">Wifi</label>
                        <ToggleCheckbox name="wifi" isChecked={data?.wifi || dataDetail?.wifi} />
                    </div>
                    <div>
                        <label className="label block mb-2">Bếp</label>
                        <ToggleCheckbox name="cook" isChecked={data?.cook || dataDetail?.bep} />
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-4'>
                    <div>
                        <label className="label block mb-2">Đổ xe</label>
                        <ToggleCheckbox name="park" isChecked={data?.park || dataDetail?.doXe} />
                    </div>
                    <div>
                        <label className="label block mb-2">Hồ bơi</label>
                        <ToggleCheckbox name="pool" isChecked={data?.pool || dataDetail?.hoBoi} />
                    </div>
                </div>
                <div className='flex gap-2 justify-end items-center mt-2'>
                    <button className="btn btn-primary" disabled={isPending}>
                        {isPending && <LoadingSpinner />}
                        <LabelAction action={action} > Phòng</LabelAction>
                    </button>
                </div>
            </fieldset>
        </form>
    )
}

export default RoomOrderForm