"use client";

import useRedux from '@/(hook)/useRedux';
import { RootState } from '@/(redux)/store';
import React from 'react'


type Props = {}

const HeadingTitle = (props: Props) => {
    const { useAppSelector } = useRedux();
    const { locationAt } = useAppSelector((state: RootState) => state.userReducer);
    return (
        <>
            <div className="absolute bottom-6 left-[50%] translate-x-[-50%]  text-white text-lg md:text-2xl font-medium" >
                {locationAt.tinhThanh && `Những trải nghiệm tuyệt vời đang chờ bạn ở  `}
                <span className="text-[#FF385C]">{locationAt.tinhThanh}</span>
            </div >
        </>

    )
}

export default HeadingTitle