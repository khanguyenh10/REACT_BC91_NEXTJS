"use client";

import useRedux from "@/(hook)/useRedux";
import { RootState } from "@/(redux)/store";

function Map() {
    const { useAppSelector } = useRedux()
    const { locatedAt } = useAppSelector((state: RootState) => state.userReducer);
    return (
        <div className="h-full w-full bg-gray-200 relative">
            <iframe title="gmap" src={`https://maps.google.com/maps?q=${locatedAt.tinhThanh}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder={0} scrolling="no" style={{ width: '100%', height: '100%' }} />
        </div>
    )
}

export default Map