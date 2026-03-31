import SearchInput from '@/app/(component)/containerPages/SearchComponent/SearchInput';
import { ProductSearchVM } from '@/app/(ViewModel)/ProductSearchVM';
import { ResponseData } from '@/app/(ViewModel)/ResponseData';
import Image from 'next/image';
import React from 'react'


const getProductByKeyWord = async (keyword: string): Promise<ResponseData<ProductSearchVM[]> | null> => {
    try {
        const res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching product by keyword:", error);
        return null;
    }
}


type Props = {
    searchParams: Promise<{ keyword: string }> | { keyword: string }
}

const page = async (props: Props) => {
    //nextjs 13.4  có hỗ trợ nhận searchParams dưới dạng promise, nên có thể await trực tiếp
    const { keyword } = await props.searchParams as { keyword: string };
    console.log("keyword", keyword);
    const response: ResponseData<ProductSearchVM[]> | null = await getProductByKeyWord(keyword);
    console.log("arrProductByKeyword", response?.content);
    return (
        <div className="container">
            <h1>Search page</h1>
            <SearchInput />
            <div className="row">
                {response?.content.map((item: ProductSearchVM, index: number) => {
                    return <div className="col-3 my-2" key={index}>
                        <div className="card">
                            <Image width={500} height={500} src={item.image} alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.price}</p>
                                <button className='btn btn-primary'>View detail</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default page