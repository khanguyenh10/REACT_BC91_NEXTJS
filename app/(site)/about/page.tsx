import { StarIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className="bg-base-100 text-base-content">
            <section className="hero min-h-[80vh] bg-base-200">
                <div className="hero-content grid md:grid-cols-2 gap-14 px-6">
                    <div className="max-w-xl">


                        <h1 className="text-6xl font-black leading-tight wow animate__fadeInUp">
                            Tìm khách sạn như ở nhà
                        </h1>

                        <p className="py-6 text-lg text-base-content/70 leading-8 wow animate__fadeInUp" data-wow-delay=".2s">
                            Airbnb giúp du khách khám phá những ngôi nhà độc đáo, kết nối với chủ nhà địa phương và trải nghiệm các thành phố một cách chân thực hơn.
                        </p>

                        <Link href="/rooms" className="btn btn-primary rounded-full px-8 wow animate__fadeInUp" data-wow-delay=".4s">
                            Khám phá
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-5 wow animate__zoomIn" data-wow-delay=".5s">
                        <img
                            src="https://picsum.photos/400/500?random=1"
                            alt=""
                            className="rounded-3xl shadow-2xl h-72 object-cover"
                        />

                        <img
                            src="https://picsum.photos/400/300?random=2"
                            alt=""
                            className="rounded-3xl shadow-2xl mt-10 object-cover"
                        />

                        <img
                            src="https://picsum.photos/400/300?random=3"
                            alt=""
                            className="rounded-3xl shadow-2xl -mt-8 object-cover"
                        />

                        <img
                            src="https://picsum.photos/400/500?random=4"
                            alt=""
                            className="rounded-3xl shadow-2xl object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 wow animate__fadeInUp">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    <div className="stat bg-base-200 rounded-3xl shadow">
                        <div className="stat-title">Khách đang hoạt động</div>
                        <div className="stat-value text-primary">1M+</div>
                    </div>

                    <div className="stat bg-base-200 rounded-3xl shadow">
                        <div className="stat-title">Chổ ở độc đáo</div>
                        <div className="stat-value">100+</div>
                    </div>

                    <div className="stat bg-base-200 rounded-3xl shadow">
                        <div className="stat-title">Đánh giá</div>
                        <div className="stat-value flex items-center">4-5 sao </div>
                    </div>
                </div>
            </section>


            <section className="py-20 bg-base-200 px-6 wow animate__fadeInUp">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-5xl font-black">
                            Phản hồi khách hàng
                        </h2>


                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="card bg-base-100 shadow-xl rounded-3xl"
                            >
                                <figure className="pt-8">
                                    <img
                                        src={`https://i.pravatar.cc/300?img=${item + 10}`}
                                        alt=""
                                        className="w-28 h-28 rounded-full border-4 border-primary object-cover"
                                    />
                                </figure>

                                <div className="card-body items-center text-center">
                                    <h3 className="card-title">
                                        Khách {item}
                                    </h3>

                                    <p className="text-base-content/70">
                                        Giá phải chăng, chỗ ở rộng rãi
                                    </p>

                                    <div className="rating rating-sm">
                                        <input
                                            type="radio"
                                            className="mask mask-star-2 bg-orange-400"
                                            checked
                                            readOnly
                                        />
                                        <input
                                            type="radio"
                                            className="mask mask-star-2 bg-orange-400"
                                            checked
                                            readOnly
                                        />
                                        <input
                                            type="radio"
                                            className="mask mask-star-2 bg-orange-400"
                                            checked
                                            readOnly
                                        />
                                        <input
                                            type="radio"
                                            className="mask mask-star-2 bg-orange-400"
                                            checked
                                            readOnly
                                        />
                                        <input
                                            type="radio"
                                            className="mask mask-star-2 bg-orange-400"
                                            checked
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 ">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <img
                        src="https://picsum.photos/700/500?random=8"
                        alt=""
                        className="rounded-3xl shadow-2xl w-full object-cover wow animate__fadeInLeft"
                    />

                    <div className='wow animate__fadeInRight'>
                        <h2 className="text-5xl font-black leading-tight ">
                            Trải nghiệm khác biệt
                        </h2>

                        <div className="space-y-6 mt-8">
                            <div className="flex gap-4">
                                <div className="text-4xl">🏡</div>

                                <div>
                                    <h3 className="font-bold text-xl">
                                        Chỗ ở độc đáo
                                    </h3>

                                    <p className="text-base-content/70 mt-1">
                                        Khám phá không gian thư giãn tuyệt vời
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-4xl">🌍</div>

                                <div>
                                    <h3 className="font-bold text-xl">
                                        Internet
                                    </h3>

                                    <p className="text-base-content/70 mt-1">
                                        Free Wifi tốc độ cao
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-4xl">✨</div>

                                <div>
                                    <h3 className="font-bold text-xl">
                                        Trải nghiệm tuyệt vời
                                    </h3>

                                    <p className="text-base-content/70 mt-1">
                                        Thư giãn sau những ngày dài làm việc
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-24 bg-primary text-primary-content">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-5xl font-black animate-bounce">
                        Bạn muốn trải nghiệm ở đây?
                    </h2>
                    <Link href="/booking" className="btn btn-neutral rounded-full px-10 mt-8 ">
                        Start Booking
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default page