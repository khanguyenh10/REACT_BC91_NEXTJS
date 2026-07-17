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
import ItemUserTr from './ItemUserTr';

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
            <SearchInput query={query} placeholder='tên' />
            <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Ngày sinh</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Giới tính</th>
                            <th>Role</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <ItemUserTr key={user.id} user={user} />
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