"use client";

import useRedux from '@/(hook)/useRedux';
import { RootState } from '@/(redux)/store';
import React from 'react'


type Props = {}

const HeadingTitle = (props: Props) => {
    const { useAppSelector } = useRedux();
    const { locatedAt } = useAppSelector((state: RootState) => state.userReducer);
    return (
        <>
            <div className="absolute bottom-6 left-[50%] translate-x-[-50%]  text-white text-lg md:text-2xl font-medium" >
                {locatedAt.tinhThanh && `Những trải nghiệm tuyệt vời đang chờ bạn ở  `}
                <span className="text-[#FF385C]">{locatedAt.tinhThanh}</span>
            </div >
        </>

    )
}

export default HeadingTitle