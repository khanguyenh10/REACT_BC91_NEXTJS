import { getLocationById } from '@/(api)/location'
import { getRoom } from '@/(api)/room'
import RoomItem from '@/(site)/rooms/[cityName]/component/RoomItem'
import { LocationVM } from '@/(viewModel)/LocationVM'
import { ResponseData } from '@/(viewModel)/ResponseData'
import { RoomVM } from '@/(viewModel)/RoomVM'
import React from 'react'

type Props = {
    roomId: number
}

const RentedRoomListing = async ({ roomId }: Props) => {
    const resRoomDetail = await getRoom(Number(roomId)) as ResponseData<RoomVM>;
    const roomDetail = resRoomDetail?.content as RoomVM;
    const resLocation = await getLocationById(Number(roomDetail.maViTri)) as ResponseData<LocationVM>;
    const locationDetail = resLocation?.content as LocationVM;
    return (
        <div className="rented-room-item">
            <RoomItem room={roomDetail} location={locationDetail} />
        </div>
    )
}

export default RentedRoomListing