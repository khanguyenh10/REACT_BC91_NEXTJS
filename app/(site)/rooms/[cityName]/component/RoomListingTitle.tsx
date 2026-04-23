"use client";
import useRedux from '@/(hook)/useRedux';
import { RoomVM } from '@/(viewModel)/RoomVM';
import React from 'react'

type Props = {
    roomsData: RoomVM[];
}

const RoomListingTitle = (props: Props) => {
    const { roomsData } = props;
    const { useAppSelector } = useRedux();
    const { locationAt, date: { fromDate, toDate } } = useAppSelector((state) => state.userReducer);
    return (
        <p > Có {roomsData.length} chỗ ở tại {locationAt?.tinhThanh} • {fromDate} – {toDate}</p>
    )
}

export default RoomListingTitle