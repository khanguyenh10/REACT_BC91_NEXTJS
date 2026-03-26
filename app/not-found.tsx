import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='container'>
            <h3>Bấm vào đây để quay về trang chủ
                <Link className='nav-link d-inline-block mx-2' href={"/"} style={{ cursor: "pointer", color: 'blue' }}>
                    Trang chủ
                </Link></h3>
        </div>
    )
}

export default page