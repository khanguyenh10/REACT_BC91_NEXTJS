import { GiftIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { getRoomById } from '@/(api)/room'
import { RoomVM } from '@/(viewModel)/RoomVM'
import { ResponseData } from '@/(viewModel)/ResponseData'
import { getLocationById } from '@/(api)/location'
import { LocationVM } from '@/(viewModel)/LocationVM'
import Conveniences from './component/Conveniences'
import Comments from './component/Comments'
import { getCommentsByRoomId } from '@/(api)/comment'
import { CommentVM } from '@/(viewModel)/CommentVM'
type Props = {
    params: Promise<{ id: string; cityName: string }> | { id: string; cityName: string }
}

const page = async (props: Props) => {
    const { id, cityName } = await props.params;
    const resRoomDetail = await getRoomById(Number(id)) as ResponseData<RoomVM>;
    const roomDetail = resRoomDetail?.content as RoomVM;
    const resLocation = await getLocationById(Number(roomDetail.maViTri)) as ResponseData<LocationVM>;
    const locationDetail = resLocation?.content as LocationVM;
    const resComments = await getCommentsByRoomId(roomDetail.id) as ResponseData<CommentVM[]>;
    const comments = resComments?.content || [] as CommentVM[];
    return (
        <div className='room-detail mt-[50px]'>
            <div className="container mx-auto px-4 py-6">
                {/* Title */}
                <h1 className="text-2xl font-bold mb-2">
                    {roomDetail.tenPhong}
                </h1>
                <p className="text-sm text-gray-500">
                    <GiftIcon className="w-5 h-5 inline-block mr-1 text-secondary" /> <span>Chủ nhà siêu cấp</span>
                    <span>
                        <Link href={`/rooms/${cityName}`} className="link link-hover ml-2 underline!">
                            {locationDetail.tinhThanh}, Việt Nam
                        </Link>
                    </span>
                </p>
                {/* Image Grid */}
                <div className="grid grid-cols-1 rounded-xl overflow-hidden mt-2">
                    <Image
                        alt="Room Image"
                        width={800}
                        height={600}
                        src={roomDetail.hinhAnh}
                        className="w-full h-auto object-cover"
                    />

                </div>

                {/* Main layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Host */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-semibold">
                                    Toàn bộ căn hộ
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {roomDetail.khach} khách · {roomDetail.phongNgu} phòng ngủ · {roomDetail.giuong} giường · {roomDetail.phongTam} phòng tắm
                                </p>
                            </div>
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src="https://i.pravatar.cc/100" />
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-4 border-t pt-4">
                            <div className="flex gap-3">
                                <span>🏠</span>
                                <div>
                                    <p className="font-medium">Toàn bộ nhà</p>
                                    <p className="text-sm text-gray-500">
                                        Bạn sẽ có chung cư cao cấp cho riêng mình.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <span>🧼</span>
                                <div>
                                    <p className="font-medium">Vệ sinh tăng cường</p>
                                    <p className="text-sm text-gray-500">
                                        Chủ nhà đã cam kết quy trình vệ sinh.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <span>👤</span>
                                <div>
                                    <p className="font-medium">Phòng là chủ nhà siêu cấp</p>
                                    <p className="text-sm text-gray-500">
                                        Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <span>⏰</span>
                                <div>
                                    <p className="font-medium">Miễn phí hủy trong 48 giờ</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="border-t pt-4">
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {roomDetail.moTa}
                            </p>
                        </div>

                        {/* Amenities */}
                        <Conveniences room={roomDetail} />

                    </div>

                    {/* RIGHT - BOOKING CARD */}
                    <div className="lg:col-span-1">
                        <div className="card bg-base-100 shadow-xl sticky top-6">
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">
                                    $44 <span className="text-sm font-normal">/ đêm</span>
                                </h2>

                                {/* Date */}
                                <div className="grid grid-cols-2 gap-2">
                                    <input
                                        type="date"
                                        className="input input-bordered w-full"
                                    />
                                    <input
                                        type="date"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                {/* Guest */}
                                <select className="select  w-full">
                                    <option>1 khách</option>
                                    <option>2 khách</option>
                                    <option>3 khách</option>
                                </select>

                                {/* Button */}
                                <button className="btn btn-primary w-full">
                                    Đặt phòng
                                </button>

                                {/* Price detail */}
                                <div className="text-sm text-gray-600 space-y-1">
                                    <div className="flex justify-between">
                                        <span>$44 x 5 đêm</span>
                                        <span>$220</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Phí dịch vụ</span>
                                        <span>$31</span>
                                    </div>
                                    <div className="border-t pt-2 flex justify-between font-semibold">
                                        <span>Tổng</span>
                                        <span>$252</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Reviews */}
                <Comments comments={comments} />
            </div>
        </div>
    )
}

export default page