import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300 px-4">
            <div className="text-center max-w-lg">
                <h1 className="text-8xl font-black text-primary drop-shadow-lg">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold">
                    Oops! Trang không tồn tại
                </h2>

                <p className="mt-3 text-base-content/70">
                    Có thể đường dẫn đã bị thay đổi hoặc trang này chưa được tạo.
                </p>

                <div className="mt-8 flex items-center justify-center gap-4">
                    <Link className='btn btn-secondary  d-inline-block mx-2 cursor-pointer' href={"/"} >
                        Trang chủ
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default page