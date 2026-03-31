//Được định nghĩa 4 phương thức chính của http: get, post, put, delete ngoài ra còn có patch, options, head
// Kết nối các orm với db, firebase, mongodb, mysql, postgresql, sqlserver, oracle
//Dành cho các dự án về landing page, blog, tin tức, giới thiệu công ty, trang cá nhân, trang sự kiện, trang dịch vụ, trang sản phẩm, trang thương mại điện tử

import { NextRequest, NextResponse } from "next/server";

// Viết phương thức api get product

export const GET = async (request: NextRequest) => {
    try {
        //Thay vì truy xuất orm db thì mình sẽ gọi api của cybersoft để lấy dữ liệu sản phẩm
        // https://apistore.cybersoft.edu.vn/api/Product
        const res = await fetch("https://apistore.cybersoft.edu.vn/api/Product");
        const data = await res.json();
        console.log("data", data);

        //trả về mảng 1 2 3 4 5
        return new NextResponse(JSON.stringify(data), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        return new NextResponse("Error fetching products", { status: 500 });
    }
}

//Tạo ra hàm post
export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();
        console.log("body", body);


        return new NextResponse(JSON.stringify(body), {
            status: 201,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error("Error creating product:", error);
        return new NextResponse("Error creating product", { status: 500 });
    }
}