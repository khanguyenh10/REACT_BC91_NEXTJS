import { getRoom } from '@/(api)/room'
import RoomItem from '@/(site)/rooms/[cityName]/component/RoomItem'
import { ResponseData } from '@/(viewModel)/ResponseData'
import { RoomVM } from '@/(viewModel)/RoomVM'
import React from 'react'

type Props = {
    roomId: number
}

const RentedRoomListing = async ({ roomId }: Props) => {
    const resRoomDetail = await getRoom(Number(roomId)) as ResponseData<RoomVM>;
    const roomDetail = resRoomDetail?.content as RoomVM;
    return (
        <div className="rented-room-item">
            <RoomItem room={roomDetail} />
        </div>
    )
}

export default RentedRoomListing