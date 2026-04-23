import { LocationVM } from '@/(viewModel)/LocationVM';
import { RoomVM } from '@/(viewModel)/RoomVM';
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { stringToSlug } from '@/utils/text';
type Props = {
    room: RoomVM;
    location: LocationVM;
}
export default function CardItem({ room, location }: Props) {
    return (
        <Link href={`/rooms/${stringToSlug(location.tinhThanh)}/${room.id}`} className="flex gap-4 cursor-pointer mb-5 hover:bg-gray-100 rounded-xl p-3 transition">
            <img
                alt={room.tenPhong}
                width={125}
                height={125}
                src={room.hinhAnh.includes("http") ? room.hinhAnh : `https://placehold.co/300x200`}
                className="w-48 h-32 object-cover rounded-xl"
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

                <p className="font-semibold text-base-content">$385 / tháng</p>
            </div>
        </Link>
    )
}