import React from 'react'
import { getLocations } from '../(api)/viTri';
import { LocationVM } from '../(viewModel)/LocationVM';
import { toast } from 'react-toastify';
import Image from 'next/image';


type Props = {}

const Location = async (props: Props) => {
    const response = await getLocations();
    let locations = response?.content || {} as LocationVM[];
    console.log('locations', locations);

    return (
        <select defaultValue="Bạn sắp đi đâu?" className="select bg-white text-gray-500 p-0 ">
            <option disabled={true} value={'Bạn sắp đi đâu?'} >Bạn sắp đi đâu?</option>
            {locations.map((location) => (
                <option key={location.id} value={location.id}>
                    <div className='flex gap-2 items-center'>
                        <Image src={location.hinhAnh} width={50} height={50} alt="" className='object-contain' />
                        <p className="text-sm font-medium text-gray-900">{location.tenViTri}</p>
                    </div>
                </option>
            ))}
        </select>
    )
}

export default Location