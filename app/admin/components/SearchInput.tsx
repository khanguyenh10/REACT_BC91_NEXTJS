"use client";
import useRouting from '@/(hook)/useRouting';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {
    query: string,
    placeholder: string
}

const SearchInput = ({ query, placeholder }: Props) => {
    const [keyword, setKeyword] = React.useState<string>(query);
    const { navigate, searchParams } = useRouting();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams);
        params.set('query', keyword);
        params.set('page', "1");
        navigate.push(`?${params.toString()}`);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }

    return (
        <form action="" className="w-full mr-2 flex justify-center" onSubmit={handleSubmit}>
            <div className="join w-120 max-w-full my-5">
                <input
                    type="text"
                    placeholder={`Nhập từ khóa theo ${placeholder}`}
                    className="input input-bordered w-full join-item"
                    value={keyword}
                    onChange={handleChange}
                />
                <button className="btn btn-primary join-item" type='submit'> <MagnifyingGlassIcon className="w-4 h-4" /> Tìm kiếm</button>
            </div>
        </form>

    )
}

export default SearchInput