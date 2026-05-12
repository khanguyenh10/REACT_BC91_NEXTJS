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
import { getRoomOrders, getSearchPaginRoomOrders } from '@/(api)/roomOrder';
import { RoomOrderVM } from '@/(viewModel)/RoomOrderVM';
import dayjs from 'dayjs';
type Props = {
    searchParams: Promise<{ query: string, page: string }> | { query: string, page: string }
}

const page = async (props: Props) => {
    let { query = '', page = "1" } = await props.searchParams;
    let resRoomOrders = await getRoomOrders() as ResponseData<RoomOrderVM[]>;
    let roomOrders = resRoomOrders.content as RoomOrderVM[];
    let pageIndex = parseInt(page);
    let pageSize = 10;
    let dataRoomOrderFilter = roomOrders.filter(roomOrder => roomOrder.maNguoiDung.toString().includes(query) || dayjs(roomOrder.ngayDen).format('DD/MM/YYYY').indexOf(query) !== -1);
    let dataRoomOrder = dataRoomOrderFilter.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
    let totalRow = dataRoomOrderFilter.length;
    return (
        <div className="p-4 md:p-6 bg-base-200 min-h-screen">
            <SearchInput query={query} />
            <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Mã Phòng</th>
                            <th>Mã Người dùng</th>
                            <th>Ngày đến</th>
                            <th>Ngày đi</th>
                            <th>Số khách</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataRoomOrder.map((roomOrder) => (
                            <tr key={roomOrder.id}>
                                <td>{roomOrder.id}</td>
                                <td>{roomOrder.maPhong}</td>
                                <td>{roomOrder.maNguoiDung}</td>
                                <td>{dayjs(roomOrder.ngayDen).format('DD/MM/YYYY')}</td>
                                <td>{dayjs(roomOrder.ngayDi).format('DD/MM/YYYY')}</td>
                                <td>{roomOrder.soLuongKhach}</td>
                                <td className="flex gap-2">
                                    <ActionItem data={roomOrder} isEdit={false} />
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