"use client";
import React from 'react'
import { useState } from 'react'


type Props = {}

const SearchInput = (props: Props) => {
    const [keyword, setKeyword] = useState("");

    //tạo formgroup search và nút button and submit form, khi submit form sẽ điều hướng sang trang search và truyền keyword lên url
    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            <a href={`/search?keyword=${keyword}`} className="btn btn-outline-success" type="submit">Search</a>
        </form>
    )
}

export default SearchInput