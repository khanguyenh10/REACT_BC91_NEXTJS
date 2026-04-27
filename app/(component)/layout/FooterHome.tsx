import React from 'react'
import Link from 'next/link';
import { LanguageIcon } from '@heroicons/react/16/solid';
type Props = {}

const FooterHome = (props: Props) => {
    return (
        <footer className="bg-[#f7f7f7] border-t mt-10">
            <div className='container'>
                {/* TOP */}
                <div className=" py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">

                    {/* GIỚI THIỆU */}
                    <div>
                        <h3 className="font-semibold mb-4 text-black">GIỚI THIỆU</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>
                                <Link href='/' className="link  link-hover ">
                                    Phương thức hoạt động của Airbnb
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Trang tin tức
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Nhà đầu tư
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Airbnb Plus
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Airbnb Luxe
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    HotelTonight
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Airbnb for Work
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Nhờ có Host, mọi điều đều có thể
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Cơ hội nghề nghiệp
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Thư của nhà sáng lập
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CỘNG ĐỒNG */}
                    <div>
                        <h3 className="font-semibold mb-4 text-black">CỘNG ĐỒNG</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Sự đa dạng và Cảm giác thân thuộc
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Tiện nghi phù hợp cho người khuyết tật
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Đối tác liên kết Airbnb
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Chỗ ở cho tuyến đầu
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Lượt giới thiệu của khách
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Airbnb.org
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* ĐÓN TIẾP KHÁCH */}
                    <div>
                        <h3 className="font-semibold mb-4 text-black">ĐÓN TIẾP KHÁCH</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Cho thuê nhà
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Tổ chức Trải nghiệm trực tuyến
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Tổ chức trải nghiệm
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Đón tiếp khách có trách nhiệm
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Trung tâm tài nguyên
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Trung tâm cộng đồng
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* HỖ TRỢ */}
                    <div>
                        <h3 className="font-semibold mb-4 text-black">HỖ TRỢ</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Biện pháp ứng phó với đại dịch COVID-19
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Trung tâm trợ giúp
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Các tùy chọn hủy
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover">
                                    Hỗ trợ khu dân cư
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className="link  link-hover"  >
                                    Tin cậy và an toàn
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* BOTTOM */}
            <div className="border-t ">
                <div className="container">
                    <div className="py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
                        <div>
                            © 2026 Airbnb, Inc. All rights reserved · Quyền riêng tư · Điều khoản · Sơ đồ trang web
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1 cursor-pointer link  link-hover">
                                <LanguageIcon className="w-5 h-5" />  Tiếng Việt (VN)</span>

                            <span>
                                <Link href='/' className="link  link-hover"  >
                                    Hỗ trợ  tài nguyên
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>

            </div>


        </footer>
    )
}

export default FooterHome