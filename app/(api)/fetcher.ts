import { redirect } from "next/navigation";
import { ACCESSTOKEN, DOMAIN, getCookie, removeCookie, TOKENCYBERSOFT, USERLOGIN } from "../utils/config";
import { toast } from "react-toastify";


export async function fetcher(url: string, options?: RequestInit) {

    const token = getCookie(ACCESSTOKEN);  
    const fetchUrl = DOMAIN + url;
    const res = await fetch(fetchUrl, {
        ...options,
        headers: {
            ...options?.headers,
            Authorization: token ? `Bearer ${token}` : '',
            tokenCybersoft: TOKENCYBERSOFT,
            'Content-Type': 'application/json',
        },
    });
    // token hết hạn hoặc fake thì trả về 401, xóa token đi
    if (res.status === 401) {
        removeCookie(ACCESSTOKEN);
        removeCookie(USERLOGIN);
        redirect('/login');
    }else if(res.status === 400 || res.status === 404){
        redirect('/not-found');
    }else if(!res.ok){
        const error = await res.json();
        throw new Error(error.message || 'Có lỗi xảy ra');
    }
    return res.json();
}
