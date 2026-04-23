"use client";
import useRedux from '@/(hook)/useRedux';
import React from 'react'
import { setFromDate, setNumberOfGuests, setToDate } from '@/(redux)/reducer/userReducer';
import { RootState } from '@/(redux)/store';

import MagnifyingGlassIcon from '@heroicons/react/24/solid/esm/MagnifyingGlassIcon';
import { stringToSlug } from '@/utils/text';
import dayjs from 'dayjs';
import { toastError } from '@/utils/toast';
import Link from 'next/link';
type Props = {}

const BookingInputs = (props: Props) => {
    const { dispatch, useAppSelector } = useRedux();
    const { numberOfGuests, date, locationAt } = useAppSelector((state: RootState) => state.userReducer);

    const handleFromDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkinDate = e.target.value;
        console.log('checkinDate', checkinDate);
        let action = setFromDate(checkinDate);
        dispatch(action);
    }
    const handleToDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkoutDate = e.target.value;
        console.log('checkoutDate', checkoutDate);
        let isInvalidDate = dayjs(checkoutDate).isBefore(dayjs(date.fromDate));
        if (isInvalidDate) {
            toastError({ message: 'Ngày trả phòng phải sau ngày nhận phòng' });
            return;
        }
        let action = setToDate(checkoutDate);
        dispatch(action);
    }
    const handleNumberOfGuests = (value: number) => {
        console.log('numberOfGuests', value);
        let action = setNumberOfGuests(value);
        dispatch(action);
    }

    return (
        <>
            {/* Nhận phòng */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-42">
                <p className="text-md font-semibold text-black mb-1">Nhận phòng</p>
                <input type="date" className="input text-sm text-gray-500 p-0 h-auto " placeholder='Thêm ngày' onChange={handleFromDate} value={date.fromDate} />
            </div>

            {/* Trả phòng */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-42">
                <p className="text-md font-semibold text-black mb-1">Trả phòng</p>
                <input type="date" className="input text-sm text-gray-500 p-0 h-auto" placeholder='Thêm ngày' onChange={handleToDate} value={date.toDate} />
            </div>
            {/* Khách */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-42">
                <p className="text-md font-semibold text-black mb-1">Khách</p>
                <div className="flex items-center gap-2">
                    <button className="btn btn-sm h-auto" onClick={() => handleNumberOfGuests(Math.max(1, numberOfGuests - 1))}>-</button>
                    <input type="number" className="input custom-number text-center  text-sm text-gray-500 p-0 h-auto w-[15px]" placeholder='Số lượng ' min="1" readOnly value={numberOfGuests} />
                    <button className="btn btn-sm h-auto" onClick={() => handleNumberOfGuests(numberOfGuests + 1)}>+</button>
                </div>
            </div>
            <div className="px-6 py-2 flex justify-between items-center w-full md:w-20">
                <Link href={`/rooms/${stringToSlug(locationAt.tinhThanh || '')}`} className="btn btn-circle bg-red-500 border-none text-white">
                    <MagnifyingGlassIcon className="w-5 h-5" />
                </Link>
            </div>
        </>
    )
}

export default BookingInputs

