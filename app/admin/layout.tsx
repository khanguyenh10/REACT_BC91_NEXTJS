import HeaderAdmin from '@/(component)/layout/HeaderAdmin'
import { ACCESSTOKEN } from '@/utils/config'
import { getCookie } from '@/utils/cookieServer'
import { BookmarkIcon, HomeModernIcon, MapPinIcon, PaperAirplaneIcon, UsersIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = async ({ children }: Props) => {
    const token = await getCookie(ACCESSTOKEN);
    const isLoggined = !!token;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <HeaderAdmin isLoggedin={isLoggined} />

                {/* Page content here */}
                <div className="p-4">{children}</div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    <ul className="menu w-full grow">
                        <li>
                            <Link href="/admin" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Quản lý người dùng">
                                <UsersIcon className="w-6 h-6" />
                                <span className="is-drawer-close:hidden">Quản lý người dùng</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/admin/locations" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Quản lý vị trí">
                                <MapPinIcon className="w-6 h-6" />
                                <span className="is-drawer-close:hidden">Quản lý vị trí</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/rooms" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Quản lý phòng">
                                <HomeModernIcon className="w-6 h-6" />
                                <span className="is-drawer-close:hidden">Quản lý phòng</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/room-orders" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Quản lý đặt phòng">
                                <BookmarkIcon className="w-6 h-6" />
                                <span className="is-drawer-close:hidden">Quản lý đặt phòng</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default layout