import React from 'react'

import { getLocations } from '@/(api)/location';
import { LocationVM } from '@/(viewModel)/LocationVM';
import LocationDropdown from './LocationDropdown';


type Props = {}

const Location = async (props: Props) => {
    const response = await getLocations();
    let locations = response?.content || {} as LocationVM[];
    // console.log('locations', locations);

    return (
        <LocationDropdown locations={locations.splice(0, 10)} />
    )
}

export default Location