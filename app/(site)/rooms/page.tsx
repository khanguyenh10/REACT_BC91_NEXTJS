
import BookingSearch from '@/(component)/shared/BookingSearch'
import Image from 'next/image'
import React from 'react'
import useRedux from '@/(hook)/useRedux'
import { RootState } from '@/(redux)/store'
import RoomListingTitle from './[cityName]/component/RoomListingTitle'
import { getRooms } from '@/(api)/room'
import { ResponseData } from '@/(viewModel)/ResponseData'
import { RoomVM } from '@/(viewModel)/RoomVM'
import RoomItem from './[cityName]/component/RoomItem'

type Props = {

}

const page = async (props: Props) => {
    const resRooms = await getRooms() as ResponseData<RoomVM[]>;
    const rooms = resRooms?.content || [] as RoomVM[]
    return (
        <>
            <section className="introduce relative">
                <div className='relative'>
                    <Image
                        src="https://picsum.photos/1920/1080?random=2"
                        className="w-full h-[500px] object-cover"
                        loading='eager'
                        width={1920}
                        height={1080}
                        alt='...'
                    />

                    {/* OVERLAY */}

                    <BookingSearch />

                    <div className="absolute  top-1/2 left-[50%]  -translate-x-1/2 -translate-y-1/2  text-white text-2xl  font-medium uppercase wow animate__fadeIn" >
                        Danh sách phòng hiện tại
                    </div >
                </div>

            </section>
            <section className='room-listing'>
                <div className="container ">
                    <div className=' font-bold mt-10 mb-5'>
                        <RoomListingTitle roomsData={rooms} />
                    </div>
                    <div className="p-4 max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {
                                rooms.map((room, i) => {
                                    if (!room.maViTri) return;
                                    return (
                                        <RoomItem room={room} key={i} layout='vertical' />
                                    )
                                })
                            }

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default page