import React from 'react'
import HeaderHome from '../(component)/layout/HeaderHome';
import FooterHome from '../(component)/layout/FooterHome';

type Props = {
    children?: React.ReactNode;
}

const layout = (props: Props) => {
    return (
        <div>
            <HeaderHome />
            {props.children}
            <FooterHome />
        </div>
    )
}

export default layout