"use client";
import useRedux from '@/(hook)/useRedux';
import React, { useState } from 'react'
import { setFromDate, setNumberOfGuests, setToDate } from '@/(redux)/reducer/userReducer';
import { RootState } from '@/(redux)/store';

import MagnifyingGlassIcon from '@heroicons/react/24/solid/esm/MagnifyingGlassIcon';
import { stringToSlug } from '@/utils/text';
import dayjs from 'dayjs';
import { toastError } from '@/utils/toast';
import Link from 'next/link';
import LocationDropdown from './LocationDropdown';
import { LocationVM } from '@/(viewModel)/LocationVM';
import { redirect } from 'next/navigation';

type Props = {
    locations: LocationVM[];
}

const BookingInputs = ({ locations }: Props) => {
    const { dispatch, useAppSelector } = useRedux();
    const { numberOfGuests, date, locationAt } = useAppSelector((state: RootState) => state.userReducer);
    const [selected, setSelected] = useState<string | null>(null);
    const [fromDate, setFromDateState] = useState(date.fromDate);
    const [toDate, setToDateState] = useState(date.toDate);

    const handleFromDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkinDate = e.target.value;
        console.log('checkinDate', checkinDate);
        setFromDateState(checkinDate);
    }
    const handleToDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkoutDate = e.target.value;
        console.log('checkoutDate', checkoutDate);
        let isInvalidDate = dayjs(checkoutDate).isBefore(dayjs(date.fromDate));
        if (isInvalidDate) {
            toastError({ message: 'Ngày trả phòng phải sau ngày nhận phòng' });
            return;
        }
        setToDateState(checkoutDate);
    }
    const handleNumberOfGuests = (value: number) => {
        console.log('numberOfGuests', value);
        let action = setNumberOfGuests(value);
        dispatch(action);
    }
    const handleSearch = () => {
        dispatch(setFromDate(fromDate));
        dispatch(setToDate(toDate));
        redirect(`/rooms/${stringToSlug(selected || '')}`);
    }
    return (
        <>
            <div className="px-6 py-2 border-b md:border-b-0 md:border-r w-full md:w-56">
                <p className="text-md font-semibold text-black">Địa điểm</p>
                <LocationDropdown locations={locations} selected={selected} setSelected={setSelected} />
            </div>
            {/* Nhận phòng */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-42">
                <p className="text-md font-semibold text-black mb-1">Nhận phòng</p>
                <input type="date" className="input input-ghost text-sm text-gray-500 p-0 h-auto " placeholder='Thêm ngày' onChange={handleFromDate} value={fromDate} />
            </div>

            {/* Trả phòng */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-42">
                <p className="text-md font-semibold text-black mb-1">Trả phòng</p>
                <input type="date" className="input input-ghost text-sm text-gray-500 p-0 h-auto" placeholder='Thêm ngày' onChange={handleToDate} value={toDate} />
            </div>
            {/* Khách */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-42">
                <p className="text-md font-semibold text-black mb-1">Khách</p>
                <div className="flex items-center gap-2">
                    <button className="btn btn-sm h-auto" onClick={() => handleNumberOfGuests(Math.max(1, numberOfGuests - 1))}>-</button>
                    <input type="number" className="input input-ghost custom-number text-center  text-sm text-gray-500 p-0 h-auto w-[15px]" placeholder='Số lượng ' min="1" readOnly value={numberOfGuests} />
                    <button className="btn btn-sm h-auto" onClick={() => handleNumberOfGuests(numberOfGuests + 1)}>+</button>
                </div>
            </div>
            <div className="px-6 py-2 flex justify-between items-center w-full md:w-20">
                <button onClick={handleSearch} className="btn btn-circle bg-secondary border-none text-white">
                    <MagnifyingGlassIcon className="w-5 h-5" />
                </button>
            </div>
        </>
    )
}

export default BookingInputs

