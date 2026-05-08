import React from 'react'
import { ResponseData } from '@/(viewModel)/ResponseData';
import { SearchPaginVM } from '@/(viewModel)/SearchPaginVM';
import { getSearchPaginLocations } from '@/(api)/location';
import { LocationVM } from '@/(viewModel)/LocationVM';
import HeaderTitle from '../components/HeaderTitle';
import SearchInput from '../components/SearchInput';
import Image from 'next/image';
import ActionItem from '../components/ActionItem';
import Pagination from '../components/Pagination';
type Props = {
    searchParams: Promise<{ query: string, page: string }> | { query: string, page: string }
}

const page = async (props: Props) => {
    let { query = '', page = "1" } = await props.searchParams;
    let resLocations = await getSearchPaginLocations(parseInt(page), 10, query) as ResponseData<SearchPaginVM<LocationVM>>;
    let { data: locations, pageIndex, pageSize, totalRow } = resLocations.content as SearchPaginVM<LocationVM>;
    return (
        <div className="p-4 md:p-6 bg-base-200 min-h-screen">
            <HeaderTitle name="Vị trí" />
            <SearchInput query={query} />
            <div className="hidden md:block overflow-x-auto bg-base-100 rounded-xl shadow">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Hình ảnh</th>
                            <th>Vị trí</th>
                            <th>Tỉnh thành</th>
                            <th>Quốc gia</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((location) => (
                            <tr key={location.id}>
                                <td>{location.id}</td>
                                <td className="font-semibold">
                                    <Image src={location.hinhAnh?.includes("http") ? location.hinhAnh : 'https://placehold.co/300x200'} alt={location.hinhAnh || '...'} width={100} height={100} className=" object-cover w-36 h-16" />
                                </td>
                                <td>{location.tenViTri}</td>
                                <td>{location.tinhThanh}</td>
                                <td className="">{location.quocGia}</td>
                                <td className="flex gap-2">
                                    <ActionItem data={location} />
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