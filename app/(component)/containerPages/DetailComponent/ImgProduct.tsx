"use client"
import React, { useState } from 'react'
import { ProductVM } from '@/app/(ViewModel)/ProductVM'
import { useSelector } from 'react-redux'
import { RootStateRedux } from '@/app/(redux)/store'

type Props = {
    prodDetail: ProductVM
}
const ImgProduct = (props: Props) => {
    const { rotate } = useSelector((state: RootStateRedux) => state.productDetailPageReducer)
    return (
        <img src={props.prodDetail.image} alt={props.prodDetail.name} style={{ width: "100%", height: "400px", objectFit: "cover", transform: rotate }} />
    )
}

export default ImgProduct