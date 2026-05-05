import React from 'react'

type Props = {}

const SearchInput = (props: Props) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm..."
                className="input input-bordered w-full"
            />
        </div>

    )
}

export default SearchInput