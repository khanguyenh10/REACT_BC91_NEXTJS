import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import React from 'react'
import BookingInputs from './BookingInputs'
import Location from './Location'

type Props = {}

const BookingSearch = (props: Props) => {
    return (
        <>
            {/* SEARCH BAR */}
            <div className="absolute top-[80px] md:top-[100px] left-1/2 -translate-x-1/2 w-full px-4 md:px-0 md:w-auto">

                <div className="bg-white rounded-full shadow-xl flex flex-col md:flex-row items-center">

                    {/* Địa điểm */}
                    <div className="px-6 py-2 border-b md:border-b-0 md:border-r w-full md:w-56">
                        <p className="text-md font-semibold text-black">Địa điểm</p>
                        <Location />
                    </div>

                    <BookingInputs />
                    <div className="px-6 py-2 flex justify-between items-center w-full md:w-20">
                        <button className="btn btn-circle bg-red-500 border-none text-white">
                            <MagnifyingGlassIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingSearch