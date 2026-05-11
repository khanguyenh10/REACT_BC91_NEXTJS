import { LocationVM } from '@/(viewModel)/LocationVM';
import { RoomVM } from '@/(viewModel)/RoomVM';
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { stringToSlug } from '@/utils/text';
import { getLocation } from '@/(api)/location';
import { ResponseData } from '@/(viewModel)/ResponseData';
type Props = {
    room: RoomVM;
    layout?: "vertical" | "horizontal";
}
export default async function RoomItem({ room, layout = 'horizontal' }: Props) {
    const resLocation = await getLocation(Number(room.maViTri)) as ResponseData<LocationVM>;
    const location = resLocation?.content as LocationVM;
    return (
        <Link href={`/rooms/${stringToSlug(location.tinhThanh)}/${room.id}`} className={`${layout === "vertical" ? "flex-col" : ""} flex gap-4 cursor-pointer mb-5 hover:bg-gray-100 hover:text-secondary hover:scale-105 rounded-xl p-3 transition wow animate__zoomIn`}>
            <img
                alt={room.tenPhong}
                width={125}
                height={125}
                src={room.hinhAnh!.includes("http") ? room.hinhAnh : `https://placehold.co/300x200`}
                className={layout === "vertical" ? "w-full h-48 object-cover rounded-xl " : "w-48 h-32 object-cover rounded-xl  "}
            />
            <div className="flex flex-col justify-between">
                <div>
                    <p className="text-sm text-gray-500">
                        Toàn bộ căn hộ dịch vụ tại {location.tinhThanh}
                    </p>
                    <h3 className="text-lg font-semibold">
                        {room.tenPhong}
                    </h3>
                    <div className="w-[15%] bg-gray-300 h-[3px] rounded-lg my-2"></div>
                    <p className="text-sm text-gray-500 mt-1">
                        {room.khach} khách · {room.phongNgu} phòng ngủ · {room.giuong} giường
                    </p>
                </div>

                <p className="font-semibold text-base-content">${room.giaTien} / đêm</p>
            </div>
        </Link>
    )
}