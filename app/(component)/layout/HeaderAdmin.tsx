"use client";
import { logoutAction } from '@/(api)/actions/logoutAction';
import useRedux from '@/(hook)/useRedux';
import { setIsLoggined, setUser } from '@/(redux)/reducer/userReducer';
import { RootState } from '@/(redux)/store';
import { getLocalStorage, USER } from '@/utils/config';
import { ArrowDownCircleIcon, PaperAirplaneIcon, UserIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'
import Image from 'next/image';

type Props = {
    isLoggedin: boolean
}

const HeaderAdmin = ({ isLoggedin }: Props) => {
    const { dispatch, useAppSelector } = useRedux();
    const { user } = useAppSelector((state: RootState) => state.userReducer);
    useEffect(() => {
        // setIsLoggedin
        dispatch(setIsLoggined(isLoggedin));
        if (!isLoggedin) {
            redirect('/');
        } else {
            // update data từ localStorage vào storage
            if (getLocalStorage(USER)) {
                dispatch(setUser(getLocalStorage(USER)));
            }
        }

    }, [isLoggedin])
    return (
        <nav className="navbar w-full bg-base-300">
            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                {/* Sidebar toggle icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
            </label>
            <div className="px-4 flex flex-1">
                <div className="flex-1">
                    <Link href="/admin" className="text-xl font-bold flex items-center gap-2 ">
                        <PaperAirplaneIcon className="w-8 h-8  text-secondary" />
                        <span className=''>Airbnb</span>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user.avatar && <Image src={user.avatar} alt="..." width={100} height={100} className="w-full h-full object-cover" />}
                            </div>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link href={`/profile/${user.id}`} className="flex items-center gap-2"><UserIcon className="w-6 h-6" /> <span>{user.name}</span></Link>
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
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderAdmin