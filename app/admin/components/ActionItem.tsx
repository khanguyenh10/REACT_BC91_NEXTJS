"use client";
import useRedux from '@/(hook)/useRedux';
import useRouting from '@/(hook)/useRouting';
import { DrawserState, openDrawer } from '@/(redux)/reducer/drawerReducer';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid'
import React from 'react'

type Props = {
    data: any
}

const ItemAction = ({ data }: Props) => {
    const { pathname } = useRouting();
    const { dispatch } = useRedux();
    const handleEdit = () => {
        let action: DrawserState = { action: "EDIT", type: null, data };
        console.log('pathname', pathname);
        if (pathname.startsWith("/admin/rooms")) {
            action.type = "USERS";
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
        <>
            <label htmlFor='drawer-action' className="btn btn-sm btn-warning text-warning-content">
                <PencilIcon className="w-4 h-4" onClick={handleEdit} />
            </label>
            <button className="btn btn-sm  btn-error text-error-content">
                <TrashIcon className="w-4 h-4" />
            </button>
        </>
    )
}

export default ItemAction