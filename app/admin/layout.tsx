import HeaderAdmin from '@/(component)/layout/HeaderAdmin'
import { ACCESSTOKEN } from '@/utils/config'
import { getCookie } from '@/utils/cookieServer'
import { BookmarkIcon, HomeModernIcon, MapPinIcon, PaperAirplaneIcon, UsersIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'
import AdminMenu from './components/AdminMenu'

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
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-16 is-drawer-open:w-64">
                    <AdminMenu />
                </div>
            </div>
        </div>
    )
}

export default layout