import React from 'react'
import SearchInput from './components/SearchInput';
import HeaderTitle from './components/HeaderTitle';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';
import ActionItem from './components/ActionItem';
import { getSearchPaginUsers } from '@/(api)/user';
import { ResponseData } from '@/(viewModel)/ResponseData';
import { SearchPaginVM } from '@/(viewModel)/SearchPaginVM';
import { UserVM } from '@/(viewModel)/UserVM';
import dayjs from 'dayjs';
import Pagination from './components/Pagination';

type Props = {
    searchParams: Promise<{ query: string, page: string }> | { query: string, page: string }
}

const page = async (props: Props) => {
    let { query = '', page = "1" } = await props.searchParams;
    let resUsers = await getSearchPaginUsers(parseInt(page), 10, query) as ResponseData<SearchPaginVM<UserVM>>;
    let { data: users, pageIndex, pageSize, totalRow } = resUsers.content as SearchPaginVM<UserVM>;
    return (
        <div className="p-4 md:p-6 bg-base-200 min-h-screen">
            <HeaderTitle name="Người dùng" />
            <SearchInput query={query} />
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
                                <td>{dayjs(user.birthday).format("DD/MM/YYYY")}</td>
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
                                    <ActionItem data={user} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className=' flex justify-center'>
                    <Pagination pageIndex={pageIndex} pageSize={pageSize} totalRow={totalRow} query={query} />

                </div>
                <br />
            </div>
        </div>

    )
}

export default page