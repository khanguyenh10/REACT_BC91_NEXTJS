import React from 'react'

import { toast } from 'react-toastify';
import Image from 'next/image';
import { getLocations } from '@/app/(api)/viTri';
import { LocationVM } from '@/app/(viewModel)/LocationVM';
import LocationDropdown from './LocationDropdown';


type Props = {}

const Location = async (props: Props) => {
    const response = await getLocations();
    let locations = response?.content || {} as LocationVM[];
    console.log('locations', locations);

    return (
        <LocationDropdown locations={locations} />
    )
}

export default Location