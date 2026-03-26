import React from 'react'
import HeaderHome from '../(component)/HeaderHome';

type Props = {
    children?: React.ReactNode;
}

const layout = (props: Props) => {
    return (
        <div>
            {/* sử dụng bootstrap 5 navbar để tạo menu header */}
            <HeaderHome />
            {props.children}
        </div>
    )
}

export default layout