import React from 'react'

import { toast } from 'react-toastify';
import Image from 'next/image';
import { getLocations, getSearchLocations } from '@/(api)/location';
import { LocationVM } from '@/(viewModel)/LocationVM';
import Link from 'next/link';
import { stringToSlug } from '@/utils/text';

type Props = {}

const LocationSearch = async (props: Props) => {
    const response = await getSearchLocations(1, 8, '');;
    let locations = response?.content.data as LocationVM[];
    locations = locations.map((item, index) => {
        let times = [
            '15 phút lái xe',
            '3 giờ lái xe',
            '6.5 giờ lái xe',
            '',
            '7.5 giờ lái xe',
            '45 phút lái xe',
            '30 phút lái xe',
            '5 giờ lái xe',
        ]
        return {
            ...item,
            time: times[index]
        }
    });
    console.log('locations', locations);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {locations.map((item, i) => (
                <Link href={`/rooms/${stringToSlug(item.tinhThanh)}`}
                    key={i}
                    className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-xl transition"
                >
                    <Image
                        alt={item.tinhThanh}
                        width={125}
                        height={125}
                        src={`${item.hinhAnh}`}
                        className="w-16 h-16 rounded-xl object-cover"
                    />

                    <div>
                        <p className="font-medium text-sm md:text-base">
                            {item.tinhThanh}
                        </p>
                        <p className="text-sm text-gray-500">
                            {item.time}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default LocationSearch