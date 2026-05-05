import React from 'react'
import SearchInput from './components/SearchInput';
import HeaderTitle from './components/HeaderTitle';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';
import ActionUsers from './components/ActionUsers';

type Props = {}
const users = [
    {
        id: 1,
        name: "ADMIN",
        birthday: "29/11/1993",
        email: "admin@gmail.com",
        role: "ADMIN",
    },
    {
        id: 54668,
        name: "VZ",
        birthday: "31/08/2025",
        email: "vanaa@gmail.com",
        role: "ADMIN",
    },
    {
        id: 54670,
        name: "FB8443BD-9BD2-401F-8065-ED8F1302BCD2",
        birthday: "31/08/2025",
        email: "example1@example.com",
        role: "USER",
    },
];

const page = (props: Props) => {
    return (
        <div className="p-4 md:p-6 bg-base-200 min-h-screen">
            <HeaderTitle name="Người dùng" />
            <SearchInput />
            <div className="hidden md:block overflow-x-auto bg-base-100 rounded-xl shadow">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Birthday</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td className="font-semibold">{user.name}</td>
                                <td>{user.birthday}</td>
                                <td className="text-blue-600">{user.email}</td>
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
                                    <ActionUsers />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default page