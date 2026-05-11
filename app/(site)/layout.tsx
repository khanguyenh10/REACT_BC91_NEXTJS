import React from 'react'
import HeaderHome from '../(component)/layout/HeaderHome';
import FooterHome from '../(component)/layout/FooterHome';
import { getCookie } from '@/utils/cookieServer';
import { ACCESSTOKEN } from '@/utils/config';
import BackToTop from '@/(component)/shared/UI/BackToTop';

type Props = {
    children?: React.ReactNode;
}

const layout = async (props: Props) => {
    const token = await getCookie(ACCESSTOKEN);
    const isLoggined = !!token;
    return (
        <div>
            <HeaderHome isLoggedin={isLoggined} />
            {props.children}
            <FooterHome />
            <BackToTop />
        </div>
    )
}

export default layout