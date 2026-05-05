"use client";
import React from 'react'

type Props = {
    name: string,
}

const HeaderTitle = ({ name }: Props) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h1 className="text-xl md:text-2xl font-bold">Quản lý {name}</h1>
            <button className="btn btn-info text-white w-full md:w-auto" onClick={() => { }}>
                + Thêm {name}
            </button>
        </div>
    )
}

export default HeaderTitle