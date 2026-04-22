"use client";
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Test = (props: Props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Test