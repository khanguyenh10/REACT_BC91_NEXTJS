// utils/cookie.server.ts
import { cookies } from "next/headers";

//hẳng số
export const DOMAIN = 'https://airbnbnew.cybersoft.edu.vn/api';
export const ACCESSTOKEN = 'accessToken';
export const USERLOGIN = 'userLogin';
export const TOKENCYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5MSIsIkhldEhhblN0cmluZyI6IjAyLzA5LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc4ODMwNzIwMDAwMCIsIm5iZiI6MTc1OTk0MjgwMCwiZXhwIjoxNzg4NDU0ODAwfQ.3f2gLYDZla_lDH4GWmfgSe9Il_QHrpoHIWhW6FSKTi8';


// Viết các hàm sử dụng localstorage và các hằng số

const saveLocalStorageString = (name: string, value: string) => {
    localStorage.setItem(name, value);
}

const getLocalStorageString = (name: string) => {
    if (localStorage.getItem(name)) {
        return localStorage.getItem(name);
    };
    return null;
}


const saveLocalStorage = (name: string, value: any) => {
    localStorage.setItem(name, JSON.stringify(value));
}

const getLocalStorage = (name: string) => {
    const data = localStorage.getItem(name);
    if (data) {
        return JSON.parse(data);
    }
    return null;
}
const removeLocalStorage = (name: string) => {
    localStorage.removeItem(name);
}

// viết hàm lưu cookie
const saveCookieClient = (name: string, value: string, days: number) => {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString(); //days * 24 * 60 * 60 * 1000 = 1 ngay
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

const getCookieClient = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
}
const removeCookieClient = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

const getCookie = async (name: string): Promise<string | null> => {
    const cookieStore = await cookies();
    return cookieStore.get(name)?.value || null;
};
const setCookie = async (
    name: string,
    value: string,
    options?: {
        maxAge?: number;
        path?: string;
    }
) => {
    const cookieStore = await cookies();

    cookieStore.set(name, value, {
        httpOnly: true,
        secure: true,
        path: options?.path || "/",
        maxAge: options?.maxAge || 60 * 60 * 24, // 1 ngày
    });
};
const removeCookie = async (name: string) => {
    const cookieStore = await cookies();
    cookieStore.delete(name);
};
export { getCookie, setCookie, removeCookie };

export { saveLocalStorage, getLocalStorage, saveLocalStorageString, getLocalStorageString, removeLocalStorage, saveCookieClient, getCookieClient, removeCookieClient };


//statuscode
/*
    200: success thành công
    201: created tạo mới thành công (thường dùng 200 cho tất cả các trường hợp thành công, nhưng nếu muốn phân biệt rõ ràng thì có thể dùng 201 cho tạo mới)

    400: Bad request lỗi client gửi tham số không hợp lệ (tìm trong csdl không có trên backend thì trả về 400)

    404: Not found không tìm thấy tài nguyên (tìm trong csdl có nhưng đã bị xóa thì trả về 404)

    401: Unauthorized lỗi xác thực (gửi lên mà không có token hoặc token hết hạn thì trả về 401) - chưa đăng nhập nên không gọi được api đó (token hết hạn, token fake, không có token)

    403: Forbidden lỗi phân quyền (đăng nhập rồi nhưng không có quyền truy cập vào api đó thì trả về 403) - có đăng nhập nhưng chưa đủ quyền

    500: Internal server error lỗi từ phía server (lỗi code, lỗi server, lỗi database,...) - lỗi xảy ra trên server nhưng chưa xử lý nguyên nhân có thể do frontend gửi dữ liệu không hợp lệ mà backend chưa có code xử lý, hoặc do lỗi logic backend 
    => Đối với FE dev thì nên trao đổi nhỏ nhẹ với BE để tìm cách giải quyết vấn đề tuy nhiên kiểm tra bằng postman truóc hoặc swagger
    



*/