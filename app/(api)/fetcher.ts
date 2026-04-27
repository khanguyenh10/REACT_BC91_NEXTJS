import { redirect } from "next/navigation";
import { ACCESSTOKEN, DOMAIN, TOKENCYBERSOFT } from "../utils/config";
import { toast } from "react-toastify";
import { getCookie } from "@/utils/cookieServer";


export async function fetcher(url: string, options?: RequestInit) {
const method = options?.method?.toUpperCase() || 'GET';
    const token = await getCookie(ACCESSTOKEN);  
    const fetchUrl = DOMAIN + url;
    console.log("token", token);
    try {
        const res = await fetch(fetchUrl, {
        ...options,
        headers: {
            ...options?.headers,
            token : `${token}`,
            tokenCybersoft: TOKENCYBERSOFT,
            'Content-Type': 'application/json',
        },
        ...(method === 'GET'
        ? {
            cache: 'force-cache',
            next: { revalidate: 60 },
        }
        : {
            cache: 'no-store',
        }),

        });
        console.log("res", res);
    let data = null;
    // Kiểm tra nếu status không nằm trong khoảng 200-299
    if (!res.status.toString().startsWith('2')) {
      switch (res.status) {
        case 401:
          console.error("Lỗi 401: Chưa đăng nhập hoặc Token hết hạn.");
          redirect('/login');
          break;
        case 403:
              data = await res.json();
          console.error("Lỗi 403: Bạn không có quyền truy cập tài nguyên này.");
          throw new Error(JSON.stringify(data));
          break;
        case 400:
             data = await res.json();
            console.error("Lỗi 400: Không hợp lệ.");
            throw new Error(JSON.stringify(data));
            break;
        case 404:
          console.error("Lỗi 404: Không tìm thấy trang hoặc API.");
           throw new Error(`Mã lỗi: ${res.status} - ${res.statusText}`);
          break;
        case 500:
          console.error("Lỗi 500: Máy chủ đang gặp sự cố.");
           throw new Error(`Mã lỗi: ${res.status} - ${res.statusText}`);
          break;
        default:
          console.error(`Lỗi hệ thống khác: ${res.status}`);
           throw new Error(`Mã lỗi: ${res.status} - ${res.statusText}`);
      }
   
    }
      // Nếu là 200 hoặc 201
     data = await res.json();
        return data;
    }catch (error ) {
       throw error;
    }
}
