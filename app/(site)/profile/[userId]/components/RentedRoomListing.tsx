import { RoomOrderVM } from '@/(viewModel)/RoomOrderVM'
import React from 'react'
import RentedRoomItem from './RentedRoomItem'
import { getRoomOrdersByUserId } from '@/(api)/roomOrder'
import { ResponseData } from '@/(viewModel)/ResponseData'

type Props = {
    userId: string
}

const RentedRoomListing = async ({ userId }: Props) => {
    const resRoomsRented = await getRoomOrdersByUserId(Number(userId)) as ResponseData<RoomOrderVM[]>;
    const roomsRented = resRoomsRented?.content as RoomOrderVM[];
    return (
        <div>
            <h2 className="text-3xl font-semibold mb-4">
                Phòng đã thuê
            </h2>

            <div className="flex flex-col gap-4">
                {roomsRented.map((roomOrder: RoomOrderVM) => (
                    <RentedRoomItem key={roomOrder.id} roomId={roomOrder.maPhong as number} />
                ))}
            </div>

        </div>
    )
}

export default RentedRoomListing