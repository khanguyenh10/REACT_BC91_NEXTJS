"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
type Props = {}

const Goto = (props: Props) => {
    const router = useRouter();
    return (
        <div>
            <button className='btn btn-success' onClick={() => {
                router.push("/about")
            }}>Go to about</button>
        </div>
    )
}

export default Goto