"use client";
import { logoutAction } from '@/(api)/actions/logoutAction';
import useRedux from '@/(hook)/useRedux';
import useRouting from '@/(hook)/useRouting';
import { openModal } from '@/(redux)/reducer/modalReducer';
import { setIsLoggined, setUser } from '@/(redux)/reducer/userReducer';
import { RootState } from '@/(redux)/store';
import { getLocalStorage, USER } from '@/utils/config';
import { ArrowDownCircleIcon, PaperAirplaneIcon, UserIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React, { useEffect } from 'react'

type Props = {
    isLoggedin: boolean
}

const HeaderHome = ({ isLoggedin }: Props) => {
    const { pathname } = useRouting();
    const { dispatch, useAppSelector } = useRedux();
    const { user } = useAppSelector((state: RootState) => state.userReducer);
    let textHeadderColor = "text-white";
    let borderMenuColor = "border-white";
    if (pathname.startsWith("/rooms/")) {
        textHeadderColor = "text-black bg-white";
        borderMenuColor = "border-black";
    }
    useEffect(() => {
        // setIsLoggedin
        dispatch(setIsLoggined(isLoggedin));
        // update data từ localStorage vào storage
        if (getLocalStorage(USER)) {
            dispatch(setUser(getLocalStorage(USER)));
        }

    }, [isLoggedin])


    const renderMenu = () => {
        if (isLoggedin) {
            return (
                <>
                    <li>
                        <Link href="/profile" className="flex items-center gap-2"><UserIcon className="w-6 h-6" /> <span>{user.name}</span></Link>
                    </li>
                    <li>
                        <form action={logoutAction} className=" block">
                            <button className="w-full">
                                <div className="flex items-center gap-2">
                                    <ArrowDownCircleIcon className="w-6 h-6" />
                                    <span> Đăng xuất</span>
                                </div>
                            </button>
                        </form>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li>

                        <button onClick={() => {
                            dispatch(openModal("LOGIN"));
                        }}>
                            <div className="flex items-center gap-2">
                                <UserIcon className="w-6 h-6" />
                                <span> Đăng nhập</span>
                            </div>
                        </button></li>
                    <li>
                        <button onClick={() => {
                            dispatch(openModal("REGISTER"));
                        }}>
                            <div className="flex items-center gap-2">
                                <UserIcon className="w-6 h-6" />
                                <span> Đăng ký</span>
                            </div>
                        </button></li>
                </>
            )
        }
    }
    return (
        <header className={`absolute top-0 left-0 w-full z-50 px-4 md:px-10 py-4 flex justify-between items-center ${textHeadderColor}`}>
            {/* Logo */}
            <Link href="/" className="text-xl font-bold flex items-center gap-2 ">
                <PaperAirplaneIcon className="w-8 h-8  text-secondary" />
                <span className=''>Airbnb</span>
            </Link>

            {/* Menu */}
            <div className="hidden md:flex gap-6 text-sm font-medium">
                <span className={`border-b-2 ${borderMenuColor} pb-1`}>Nơi ở</span>
                <span className={` pb-1`}>Trải nghiệm</span>
                <span className={`  pb-1`}>Trải nghiệm trực tuyến</span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
                <span className="hidden md:inline text-sm">
                    {isLoggedin ? <span className='uppercase'></span> : "Đón tiếp khách"}
                </span>

                {/* <button className="btn btn-ghost btn-circle text-white">
                    🌐
                </button> */}

                <div className="dropdown dropdown-hover dropdown-end  ">
                    <div className="bg-white text-black rounded-full px-3 py-3 flex items-center gap-2">
                        <UserIcon className="w-5 h-5" />
                    </div>
                    <ul className="dropdown-content menu bg-white text-black rounded-box z-1 w-52 p-2 shadow-sm">
                        {renderMenu()}
                    </ul>
                </div>
            </div>


        </header>
    )
}

export default HeaderHome