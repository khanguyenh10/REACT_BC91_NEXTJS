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
    const { locationAt } = useAppSelector((state) => state.userReducer);
    return (
        <p > Có {roomsData.length} chỗ ở tại {locationAt?.tinhThanh} • 22/04/2026 – 22/04/2026</p>
    )
}

export default RoomListingTitle