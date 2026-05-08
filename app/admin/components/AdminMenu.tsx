"use client";
import useRouting from '@/(hook)/useRouting';
import { BookmarkIcon, HomeModernIcon, MapPinIcon, UsersIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

type Props = {}

const AdminMenu = (props: Props) => {
    const { pathname } = useRouting();
    const menus = [
        {
            href: "/admin",
            label: "Quản lý người dùng",
            icon: UsersIcon,
            exact: true,
        },
        {
            href: "/admin/locations",
            label: "Quản lý vị trí",
            icon: MapPinIcon,
        },
        {
            href: "/admin/rooms",
            label: "Quản lý phòng",
            icon: HomeModernIcon,
        },
        {
            href: "/admin/room-orders",
            label: "Quản lý đặt phòng",
            icon: BookmarkIcon,
        },
    ]
    return (
        <ul className="menu w-full grow">
            {menus.map((item) => {
                const Icon = item.icon

                const isActive = item.exact
                    ? pathname === item.href
                    : pathname.startsWith(item.href)

                return (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            data-tip={item.label}
                            className={`
            is-drawer-close:tooltip
            is-drawer-close:tooltip-right
            ${isActive ? "bg-secondary text-white" : ""}
          `}
                        >
                            <Icon className="w-6 h-6" />
                            <span className="is-drawer-close:hidden">
                                {item.label}
                            </span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default AdminMenu