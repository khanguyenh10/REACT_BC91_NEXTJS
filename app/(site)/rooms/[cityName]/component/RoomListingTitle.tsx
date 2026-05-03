"use client";
import useRedux from '@/(hook)/useRedux';
import { RoomVM } from '@/(viewModel)/RoomVM';
import dayjs from 'dayjs';
import React from 'react'

type Props = {
    roomsData: RoomVM[];
}

const RoomListingTitle = (props: Props) => {
    const { roomsData } = props;
    const { useAppSelector } = useRedux();
    const { locationAt, date: { fromDate, toDate } } = useAppSelector((state) => state.userReducer);
    return (
        <p className=" text-lg" > Có {roomsData.length} chỗ ở tại {locationAt?.tinhThanh} • {dayjs(fromDate).format('DD/MM/YYYY')} - {dayjs(toDate).format('DD/MM/YYYY')} </p>
    )
}

export default RoomListingTitle