"use client"

import { rotateImgActionPayload } from '@/app/(redux)/reducer/productDetailPageReducer'
import { ProductVM } from '@/app/(ViewModel)/ProductVM'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
type Props = {
    prodDetail: ProductVM
}

const ListButtonImg = (props: Props) => {
    const { prodDetail } = props
    const dispatch = useDispatch();
    return (
        <div className="row">
            {prodDetail.detaildetailedImages?.map((rotate, index) => {

                console.log('detail', prodDetail.detaildetailedImages)
                return <div key={index} className="col mt-2 border rounded p-1 mx-1" style={{ borderColor: '#ddd' }}>
                    <img
                        src={prodDetail.image}
                        alt={`${prodDetail.name} detail ${index + 1}`}
                        className="img-fluid rounded"
                        style={{ transform: rotate }}
                        onClick={() => dispatch(rotateImgActionPayload(rotate))}
                    />
                </div>
            })}

        </div>



    )
}

export default ListButtonImg