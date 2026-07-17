"use client";

import { UserVM } from '@/(viewModel)/UserVM';
import dayjs from 'dayjs';
import React from 'react'
import ActionItem from './components/ActionItem';
import useRedux from '@/(hook)/useRedux';
import { RootState } from '@/(redux)/store';

type Props = {
    user: UserVM
}

const ItemUserTr = ({ user }: Props) => {
    const { useAppSelector } = useRedux();
    const { user: userMe } = useAppSelector((state: RootState) => state.userReducer)
    return (
        <tr key={user.id} className={userMe?.id == user.id ? 'hidden' : ''}>
            <td>{user.id}</td>
            <td className="font-semibold">{user.name}</td>
            <td>{dayjs(user.birthday).format("DD/MM/YYYY")}</td>
            <td className="">{user.phone}</td>
            <td className="text-blue-600">{user.email}</td>
            <td>
                <span
                    className={`font-bold badge ${user.gender.toString() === "true"
                        ? "badge-primary"
                        : "badge-secondary"
                        }`}
                >
                    {user.gender ? "Nam" : "Nữ"}
                </span>
            </td>
            <td>
                <span
                    className={`font-bold ${user.role === "ADMIN"
                        ? "text-red-500"
                        : "text-green-600"
                        }`}
                >
                    {user.role}
                </span>
            </td>
            <td className="flex gap-2">
                <ActionItem data={user} />
            </td>
        </tr>
    )
}

export default ItemUserTr
