//Định nghĩa function middleware để kiểm tra token trước khi gọi api
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    console.log('middle ware is running');
    //Lấy token từ header của request
    const token = request.headers.get("Authorization");


    //Nếu không có token thì trả về lỗi 401
    if (!token) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    //Nếu có token thì tiếp tục gọi api
    return NextResponse.next();
}

//Định nghĩa các đường dẫn mà middleware sẽ được áp dụng
export const config = {
    matcher: [
        "/api/product/:path*", //Áp dụng middleware cho tất cả các đường dẫn bắt đầu bằng /api/product
    ],
};