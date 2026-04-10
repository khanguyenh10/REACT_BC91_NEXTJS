import React from 'react'

type Props = {}

const FooterHome = (props: Props) => {
    return (
        <footer className="bg-[#f7f7f7] border-t mt-10">

            {/* TOP */}
            <div className="px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">

                {/* GIỚI THIỆU */}
                <div>
                    <h3 className="font-semibold mb-4 text-black">GIỚI THIỆU</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li>Phương thức hoạt động của Airbnb</li>
                        <li>Trang tin tức</li>
                        <li>Nhà đầu tư</li>
                        <li>Airbnb Plus</li>
                        <li>Airbnb Luxe</li>
                        <li>HotelTonight</li>
                        <li>Airbnb for Work</li>
                        <li>Nhờ có Host, mọi điều đều có thể</li>
                        <li>Cơ hội nghề nghiệp</li>
                        <li>Thư của nhà sáng lập</li>
                    </ul>
                </div>

                {/* CỘNG ĐỒNG */}
                <div>
                    <h3 className="font-semibold mb-4 text-black">CỘNG ĐỒNG</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li>Sự đa dạng và Cảm giác thân thuộc</li>
                        <li>Tiện nghi phù hợp cho người khuyết tật</li>
                        <li>Đối tác liên kết Airbnb</li>
                        <li>Chỗ ở cho tuyến đầu</li>
                        <li>Lượt giới thiệu của khách</li>
                        <li>Airbnb.org</li>
                    </ul>
                </div>

                {/* ĐÓN TIẾP KHÁCH */}
                <div>
                    <h3 className="font-semibold mb-4 text-black">ĐÓN TIẾP KHÁCH</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li>Cho thuê nhà</li>
                        <li>Tổ chức Trải nghiệm trực tuyến</li>
                        <li>Tổ chức trải nghiệm</li>
                        <li>Đón tiếp khách có trách nhiệm</li>
                        <li>Trung tâm tài nguyên</li>
                        <li>Trung tâm cộng đồng</li>
                    </ul>
                </div>

                {/* HỖ TRỢ */}
                <div>
                    <h3 className="font-semibold mb-4 text-black">HỖ TRỢ</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li>Biện pháp ứng phó với đại dịch COVID-19</li>
                        <li>Trung tâm trợ giúp</li>
                        <li>Các tùy chọn hủy</li>
                        <li>Hỗ trợ khu dân cư</li>
                        <li>Tin cậy và an toàn</li>
                    </ul>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="border-t px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-3">
                <div>
                    © 2021 Airbnb, Inc. All rights reserved · Quyền riêng tư · Điều khoản · Sơ đồ trang web
                </div>

                <div className="flex items-center gap-4">
                    <span>🌐 Tiếng Việt (VN)</span>
                    <span>$ USD</span>
                    <span>📘</span>
                    <span>🐦</span>
                    <span>📷</span>
                </div>
            </div>
        </footer>
    )
}

export default FooterHome