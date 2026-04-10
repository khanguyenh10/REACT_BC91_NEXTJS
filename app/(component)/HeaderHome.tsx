import { ArrowDownIcon, ChevronDownIcon, PaperAirplaneIcon, UserIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

type Props = {}

const HeaderHome = (props: Props) => {
    return (
        <header className="absolute top-0 left-0 w-full z-50 px-4 md:px-10 py-4 flex justify-between items-center text-white">
            {/* Logo */}
            <div className="text-xl font-bold flex items-center gap-2">
                <PaperAirplaneIcon className="w-8 h-8 " />
                airbnb
            </div>

            {/* Menu */}
            <div className="hidden md:flex gap-6 text-sm font-medium">
                <span className="border-b-2 border-white pb-1">Nơi ở</span>
                <span>Trải nghiệm</span>
                <span>Trải nghiệm trực tuyến</span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
                <span className="hidden md:inline text-sm">
                    Đón tiếp khách
                </span>

                {/* <button className="btn btn-ghost btn-circle text-white">
                    🌐
                </button> */}

                <div className="dropdown dropdown-hover dropdown-end ">
                    <div className="bg-white text-black rounded-full px-3 py-3 flex items-center gap-2">
                        <UserIcon className="w-5 h-5" />
                    </div>
                    <ul className="dropdown-content menu bg-base-100 text-black rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><button> Đăng nhập </button></li>
                        <li><button> Đăng ký </button></li>
                    </ul>
                </div>
            </div>


        </header>
    )
}

export default HeaderHome