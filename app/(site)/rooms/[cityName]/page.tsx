import RoomListing from './component/RoomListing'
import Map from './component/Map'
import BookingSearch from '@/(component)/shared/BookingSearch'
import Image from 'next/image'
import React from 'react'
import useRedux from '@/(hook)/useRedux'
import { RootState } from '@/(redux)/store'
import HeadingTitle from './component/HeadingTitle'

type Props = {
    params: Promise<{ cityName: string }> | { cityName: string }
}

const page = (props: Props) => {
    return (
        <>
            <section className="introduce relative">
                <Image
                    src="https://picsum.photos/1920/1080?random=2"
                    className="w-full h-[500px] object-cover"
                    loading='eager'
                    width={1920}
                    height={1080}
                    alt='...'
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40" />

                <BookingSearch />

                <HeadingTitle />
            </section>
            <section className='room-listing'>
                <div className="container ">
                    <div className="flex flex-1 items-start pt-20">

                        <div className="w-1/2 overflow-y-auto ">
                            <RoomListing params={props.params} />
                        </div>

                        <div className="w-1/2 sticky top-[0] h-[calc(100vh-112px)] " >
                            <Map />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default page