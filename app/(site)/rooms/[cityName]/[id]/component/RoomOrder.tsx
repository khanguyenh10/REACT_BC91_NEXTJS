"use client";
import useRedux from '@/(hook)/useRedux';
import { setFromDate, setNumberOfGuests, setToDate } from '@/(redux)/reducer/userReducer';
import { CommentVM } from '@/(viewModel)/CommentVM';
import { RoomOrderVM } from '@/(viewModel)/RoomOrderVM';
import { RoomVM } from '@/(viewModel)/RoomVM';
import { toastError } from '@/utils/toast';
import { StarIcon } from '@heroicons/react/16/solid';
import dayjs from 'dayjs';
import React from 'react'

type Props = {
    room: RoomVM;
    comments: CommentVM[];
    roomsOrder: RoomOrderVM[];
}

const RoomOrder = (props: Props) => {
    const { room, comments } = props;
    const averageRating = comments.length > 0 ? (comments.reduce((sum, comment) => sum + comment.saoBinhLuan, 0) / comments.length).toFixed(2) : '0';
    const { useAppSelector, dispatch } = useRedux();
    const { date: { fromDate, toDate }, numberOfGuests } = useAppSelector((state) => state.userReducer);
    const countNight = dayjs(toDate).diff(dayjs(fromDate), 'day') + 1;
    const handleFromDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkoutDate = e.target.value;
        console.log('checkoutDate', checkoutDate);
        let isInvalidDate = dayjs(checkoutDate).isBefore(dayjs());
        if (isInvalidDate) {
            toastError({ message: 'Ngày nhận phòng phải sau ngày hôm nay' });
            return;
        }
        dispatch(setFromDate(checkoutDate));
    }

    const handleToDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkoutDate = e.target.value;
        console.log('checkoutDate', checkoutDate);
        let isInvalidDate = dayjs(checkoutDate).isBefore(dayjs(fromDate));
        if (isInvalidDate) {
            toastError({ message: 'Ngày trả phòng phải sau ngày nhận phòng' });
            return;
        }
        dispatch(setToDate(checkoutDate));
    }
    const handleNumberOfGuests = (value: number) => {
        console.log('numberOfGuests', value);
        let action = setNumberOfGuests(value);
        dispatch(action);
    }
    return (
        <div className="lg:col-span-1">
            <div className="card bg-base-100 shadow-xl sticky top-6">
                <div className="card-body">
                    <div className="flex items-center justify-between gap-2 ">
                        <h2 className="text-xl font-semibold">
                            ${room.giaTien} <span className="text-sm font-normal">/ đêm</span>
                        </h2>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-bold"> <StarIcon className="w-4 h-4 inline-block text-secondary -translate-y-px" /> {averageRating}</span>
                            <a href="#comments" className="text-lg text-gray-500 hover:text-secondary underline inline-block">({comments.length} đánh giá)</a>
                        </div>
                    </div>


                    {/* Date */}
                    <div className="grid grid-cols-2 gap-2 mt-4">
                        <input
                            type="date"
                            className="input input-bordered w-full"
                            value={fromDate}
                            onChange={handleFromDate}
                        />
                        <input
                            type="date"
                            className="input input-bordered w-full"
                            value={toDate}
                            onChange={handleToDate}
                        />
                    </div>

                    {/* Guest */}
                    <select className="select  w-full" onChange={(e) => handleNumberOfGuests(parseInt(e.target.value))} value={numberOfGuests}>
                        <option value={1}>1 khách</option>
                        <option value={2}>2 khách</option>
                        <option value={3}>3 khách</option>
                    </select>

                    {/* Button */}
                    <button className="btn btn-primary w-full">
                        Đặt phòng
                    </button>

                    {/* Price detail */}
                    <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex justify-between">
                            <span>${room.giaTien} x {countNight} đêm</span>
                            <span>${room.giaTien * countNight}</span>
                        </div>
                        <div className="flex justify-between my-2">
                            <span>Phí dịch vụ</span>
                            <span>$8</span>
                        </div>
                        <div className="border-t text-base-content text-xl pt-2 flex justify-between font-semibold">
                            <span>Tổng</span>
                            <span>${room.giaTien * countNight + 8}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomOrder