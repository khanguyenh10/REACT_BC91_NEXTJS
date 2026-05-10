"use client";
import useRedux from '@/(hook)/useRedux';
import useRouting from '@/(hook)/useRouting';
import { DrawserState, openDrawer } from '@/(redux)/reducer/drawerReducer';
import React from 'react'

type Props = {
    name: string,
    data?: any
}

const HeaderTitle = ({ name, data }: Props) => {
    const { pathname } = useRouting();
    const { dispatch } = useRedux();
    const handleAdd = () => {
        let action: DrawserState = { action: "ADD", type: null };
        console.log('pathname', pathname);
        if (pathname.startsWith("/admin/rooms")) {
            action.type = "ROOMS";
            action.dataDetail = { ...action.dataDetail, locations: data }
        } else if (pathname.startsWith("/admin/room-orders")) {
            action.type = "ROOM_ORDERS";
        } else if (pathname.startsWith("/admin/locations")) {
            action.type = "LOCATIONS";
        } else {
            action.type = "USERS";
        }
        dispatch(openDrawer(action));
    }
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h1 className="text-xl md:text-2xl font-bold">Quản lý {name}</h1>
            <label htmlFor="drawer-action" className="btn btn-info text-white w-full md:w-auto" onClick={handleAdd}>
                + Thêm {name}
            </label>
        </div>
    )
}

export default HeaderTitle