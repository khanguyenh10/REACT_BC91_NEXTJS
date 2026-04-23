

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import React from 'react'
import BookingInputs from './BookingInputs'
import Link from 'next/link'
import { getLocations } from '@/(api)/location'
import { LocationVM } from '@/(viewModel)/LocationVM'

type Props = {}

const BookingSearch = async (props: Props) => {
    const response = await getLocations();
    let locations = response?.content || {} as LocationVM[];
    return (
        <>
            {/* SEARCH BAR */}
            <div className="absolute top-[80px] md:top-[100px] left-1/2 -translate-x-1/2 w-full px-4 md:px-0 md:w-auto z-10">

                <div className="bg-white rounded-full shadow-xl flex flex-col md:flex-row items-center">

                    <BookingInputs locations={locations.splice(0, 8)} />

                </div>
            </div>
        </>
    )
}

export default BookingSearch