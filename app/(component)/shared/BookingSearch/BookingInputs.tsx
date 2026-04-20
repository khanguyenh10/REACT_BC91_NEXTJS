"use client";
import useRedux from '@/(hook)/useRedux';
import React from 'react'
import { setFromDate, setNumberOfGuests, setToDate } from '@/(redux)/reducer/userReducer';
import { RootState } from '@/(redux)/store';
type Props = {}

const BookingInputs = (props: Props) => {
    const { dispatch, useAppSelector } = useRedux();
    const { numberOfGuests } = useAppSelector((state: RootState) => state.userReducer);

    const handleFromDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkinDate = e.target.value;
        console.log('checkinDate', checkinDate);
        let action = setFromDate(checkinDate);
        dispatch(action);
    }
    const handleToDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkoutDate = e.target.value;
        console.log('checkoutDate', checkoutDate);
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
                <input type="date" className="input text-sm text-gray-500 p-0 h-auto " placeholder='Thêm ngày' onChange={handleFromDate} />
            </div>

            {/* Trả phòng */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-42">
                <p className="text-md font-semibold text-black mb-1">Trả phòng</p>
                <input type="date" className="input text-sm text-gray-500 p-0 h-auto" placeholder='Thêm ngày' onChange={handleToDate} />
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

        </>
    )
}

export default BookingInputs

