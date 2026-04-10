import React from 'react'
import HeaderHome from '../(component)/HeaderHome';
import FooterHome from '../(component)/FooterHome';

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