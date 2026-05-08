import { getLocation } from '@/(api)/location';
import { LocationVM } from '@/(viewModel)/LocationVM';
import { ResponseData } from '@/(viewModel)/ResponseData';
import React from 'react'


type Props = {
    locationId: number
}


const LocationInfo = async ({ locationId }: Props) => {
    const resLocation = await getLocation(Number(locationId)) as ResponseData<LocationVM>;
    const location = resLocation?.content as LocationVM;
    return (
        <>{location.tenViTri}</>
    )

}

export default LocationInfo