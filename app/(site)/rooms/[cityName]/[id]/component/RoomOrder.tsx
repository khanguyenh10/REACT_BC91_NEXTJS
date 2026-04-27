"use client";
import { roomOrderAction } from '@/(api)/actions/roomOrderAction';
import useRedux from '@/(hook)/useRedux';
import useRouting from '@/(hook)/useRouting';
import useServerAction from '@/(hook)/useServerAction';
import { setFromDate, setNumberOfGuests, setToDate } from '@/(redux)/reducer/userReducer';
import { CommentVM } from '@/(viewModel)/CommentVM';
import { RoomOrderVM } from '@/(viewModel)/RoomOrderVM';
import { RoomVM } from '@/(viewModel)/RoomVM';
import { toastError } from '@/utils/toast';
import { StarIcon } from '@heroicons/react/16/solid';
import dayjs from 'dayjs';
import React, { useActionState, useEffect } from 'react'

import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import LoadingSpinner from '@/(component)/shared/UI/LoadingSpinner';
import { CommentVMByRoomID } from '@/(viewModel)/CommentVMByRoomID';
import CustomSelect from '@/(component)/shared/UI/CustomSelect';



type Props = {
    room: RoomVM;
    comments: CommentVMByRoomID[];
    roomsOrder: RoomOrderVM[];
}

const RoomOrder = (props: Props) => {
    const { pathname, navigate } = useRouting();
    const { room, comments, roomsOrder } = props;
    const averageRating = comments.length > 0 ? (comments.reduce((sum, comment) => sum + comment.saoBinhLuan, 0) / comments.length).toFixed(2) : '0';
    const { useAppSelector, dispatch } = useRedux();
    const { date: { fromDate, toDate }, numberOfGuests } = useAppSelector((state) => state.userReducer);
    const countNight = dayjs(toDate).diff(dayjs(fromDate), 'day');

    // checkin và checkout ko cùng 1 ngày, checkin vào 12h
    const isRoomOrdered = roomsOrder.some((roomOrder) => {
        if (roomOrder.maPhong !== room.id) return false;

        const startA = dayjs(roomOrder.ngayDen).startOf('day');
        const endA = dayjs(roomOrder.ngayDi).startOf('day');

        const startB = dayjs(fromDate).startOf('day');
        const endB = dayjs(toDate).startOf('day');

        if (startA.isBefore(endB) && startB.isBefore(endA)) {
            return true;
        }
        return false;
    });

    const { state, isPending, isSuccess, formAction } = useServerAction(
        roomOrderAction,
    );;




    const handleFromDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkoutDate = e.target.value;
        let isInvalidDate = dayjs(checkoutDate).isBefore(dayjs());
        // if (isInvalidDate) {
        //     toastError({ message: 'Ngày nhận phòng phải sau ngày hôm nay' });
        //     return;
        // }
        dispatch(setFromDate(checkoutDate));
    }

    const handleToDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkoutDate = e.target.value;
        let isInvalidDate = dayjs(checkoutDate).isBefore(dayjs(fromDate));
        if (isInvalidDate) {
            toastError({ message: 'Ngày trả phòng phải sau ngày nhận phòng' });
            return;
        }
        dispatch(setToDate(checkoutDate));
    }
    const handleNumberOfGuests = (value: number) => {
        console.log("value", value);
        let action = setNumberOfGuests(value);
        dispatch(action);
    }

    console.log("numberOfGuests", numberOfGuests);
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

                    <form action={formAction} >
                        {/* Date */}
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="label">
                                    <span className="label-text mb-1">Ngày nhận phòng</span>
                                </label>
                                <input
                                    type="date"
                                    className="input input-bordered w-full"
                                    value={fromDate}
                                    onChange={handleFromDate}
                                    name="fromDate"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text mb-1">Ngày trả phòng</span>
                                </label>
                                <input
                                    type="date"
                                    className="input input-bordered w-full"
                                    value={toDate}
                                    onChange={handleToDate}
                                    name="toDate"
                                />
                            </div>


                            <input type="hidden" name="roomId" value={room.id} />
                            <input type="hidden" name="isRoomOrdered" value={isRoomOrdered.toString()} />
                            <input type="hidden" name="pathname" value={pathname} />
                        </div>

                        {/* Guest */}
                        <div className="my-2">
                            <label className="label">
                                <span className="label-text mb-1">Số lượng khách</span>
                            </label>
                            <CustomSelect
                                value={numberOfGuests.toString()}
                                onChange={(value) => handleNumberOfGuests(parseInt(value))}
                                placeholder="Số lượng khách"
                                options={[
                                    { label: "1", value: "1" },
                                    { label: "2", value: "2" },
                                    { label: "3", value: "3" },
                                ]}
                            />
                            {/* <select className="select  w-full " onChange={(e) => handleNumberOfGuests(parseInt(e.target.value))} value={numberOfGuests} name="numberOfGuests">
                                <option value={1} >1 khách</option>
                                <option value={2} >2 khách</option>
                                <option value={3} >3 khách</option>
                            </select> */}

                        </div>

                        {/* Button */}
                        <button type="submit" className="btn btn-primary w-full" disabled={isPending}>
                            {isPending ? <LoadingSpinner /> : 'Đặt phòng'}
                        </button>
                        {/* Price detail */}
                        <div className="text-sm text-gray-600 space-y-1 my-2">
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
                    </form>
                </div>
            </div >
        </div >
    )
}

export default RoomOrder