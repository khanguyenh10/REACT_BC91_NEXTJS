"use client"
import React, { use, useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../(redux)/store'
import { disableConsole } from '@/utils/text'

type Props = {
    children?: React.ReactNode
}

const LoadRedux = (props: Props) => {
    // ẩn tất cả log
    useEffect(() => {
        disableConsole();
    }, [])
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default LoadRedux