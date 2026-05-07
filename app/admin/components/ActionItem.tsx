"use client";
import { removeUserAction } from '@/(api)/actions/admin/userAction';
import useRedux from '@/(hook)/useRedux';
import useRouting from '@/(hook)/useRouting';
import { DrawserState, openDrawer } from '@/(redux)/reducer/drawerReducer';
import { toastConfirmDelete, toastError, toastSuccess } from '@/utils/toast';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid'
import React from 'react'

type Props = {
    data: any
}

const ItemAction = ({ data }: Props) => {
    const { pathname } = useRouting();
    const { dispatch } = useRedux();
    let state: DrawserState = { action: null, type: null, dataDetail: data };
    if (pathname.startsWith("/admin/rooms")) {
        state.type = "USERS";
    } else if (pathname.startsWith("/admin/room-orders")) {
        state.type = "ROOM_ORDERS";
    } else if (pathname.startsWith("/admin/locations")) {
        state.type = "LOCATIONS";
    } else {
        state.type = "USERS";
    }
    const handleEdit = () => {
        state.action = "EDIT";
        dispatch(openDrawer(state));
    }
    const handleDelete = () => {
        toastConfirmDelete({
            description: 'Bạn có chắc muốn xóa',
            onConfirm: async () => {
                try {
                    if (state.type === "USERS") {
                        await removeUserAction(data.id, pathname);
                    } else if (state.type == "LOCATIONS") {
                        // await removeUserAction(data.id, pathname);
                    }
                    toastSuccess('Xoá thành công');
                } catch (error) {
                    console.log(error);
                    toastError('Xoá thất bại');
                }


            },
        });
    };
    return (
        <>
            <button className="btn btn-sm btn-warning text-warning-content" onClick={handleEdit}>
                <PencilIcon className="w-4 h-4" />
            </button>
            <button className="btn btn-sm  btn-error text-error-content" onClick={handleDelete}>
                <TrashIcon className="w-4 h-4" />
            </button>
        </>
    )
}

export default ItemAction