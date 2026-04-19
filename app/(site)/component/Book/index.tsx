"use client";
import useRedux from '@/(hook)/useRedux';
import React from 'react'
import { setFromDate, setNumberOfGuests, setToDate } from '@/(redux)/reducer/userReducer';
type Props = {}

const Book = (props: Props) => {
    const { dispatch } = useRedux();

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
    const handleNumberOfGuests = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numberOfGuests = e.target.value;
        console.log('numberOfGuests', numberOfGuests);
        let action = setNumberOfGuests(Number(numberOfGuests));
        dispatch(action);
    }


    return (
        <>
            {/* Nhận phòng */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-42">
                <p className="text-md font-semibold text-black mb-1">Nhận phòng</p>
                <input type="date" className="input text-sm text-gray-500 p-0 " placeholder='Thêm ngày' onChange={handleFromDate} />
            </div>

            {/* Trả phòng */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-42">
                <p className="text-md font-semibold text-black mb-1">Trả phòng</p>
                <input type="date" className="input text-sm text-gray-500 p-0 " placeholder='Thêm ngày' onChange={handleToDate} />
            </div>
            {/* Khách */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-32">
                <p className="text-md font-semibold text-black mb-1">Khách</p>
                <input type="number" className="input  text-sm text-gray-500 pl-0 " placeholder='Số lượng ' min="1" onChange={handleNumberOfGuests} defaultValue={1} />
            </div>
        </>
    )
}

export default Book

