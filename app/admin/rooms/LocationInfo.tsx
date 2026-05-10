import { getLocation } from '@/(api)/location';
import { LocationVM } from '@/(viewModel)/LocationVM';
import { ResponseData } from '@/(viewModel)/ResponseData';
import { RoomVM } from '@/(viewModel)/RoomVM';
import React from 'react'
import ActionItem from '../components/ActionItem';


type Props = {
    locationId: number,
}


const LocationInfo = async ({ locationId }: Props) => {
    const resLocation = await getLocation(Number(locationId)) as ResponseData<LocationVM>;
    const location = resLocation?.content as LocationVM;
    return (
        <>
            {location.tenViTri}
        </>
    )

}

export default LocationInfo