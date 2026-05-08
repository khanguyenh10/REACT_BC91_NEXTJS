import React from 'react'
import { ResponseData } from '@/(viewModel)/ResponseData';
import HeaderTitle from '../components/HeaderTitle';
import SearchInput from '../components/SearchInput';
import Image from 'next/image';
import ActionItem from '../components/ActionItem';
import Pagination from '../components/Pagination';
import { getSearchPaginRooms } from '@/(api)/room';
import { RoomVM } from '@/(viewModel)/RoomVM';
import { SearchPaginVM } from '@/(viewModel)/SearchPaginVM';
import LocationInfo from './LocationInfo';
type Props = {
    searchParams: Promise<{ query: string, page: string }> | { query: string, page: string }
}

const page = async (props: Props) => {
    let { query = '', page = "1" } = await props.searchParams;
    let resRooms = await getSearchPaginRooms(parseInt(page), 10, query) as ResponseData<SearchPaginVM<RoomVM>>;
    let { data: rooms, pageIndex, pageSize, totalRow } = resRooms.content as SearchPaginVM<RoomVM>;
    return (
        <div className="p-4 md:p-6 bg-base-200 min-h-screen">
            <HeaderTitle name="Phòng" />
            <SearchInput query={query} />
            <div className="hidden md:block overflow-x-auto bg-base-100 rounded-xl shadow">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Hình ảnh</th>
                            <th>Tên Phòng</th>
                            <th>Tỉnh thành</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room) => (
                            <tr key={room.id}>
                                <td>{room.id}</td>
                                <td className="font-semibold">
                                    <Image src={room.hinhAnh?.includes("http") ? room.hinhAnh : 'https://placehold.co/300x200'} alt={room.hinhAnh || '...'} width={300} height={300} className=" object-cover w-36 h-16" />
                                </td>
                                <td>{room.tenPhong}</td>
                                <td>{room.maViTri && <LocationInfo locationId={room.maViTri} />}</td>
                                <td className="flex gap-2">
                                    <ActionItem data={room} />
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