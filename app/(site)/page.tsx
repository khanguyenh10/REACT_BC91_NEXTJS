import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <section className="introduce relative">
        {/* HERO IMAGE */}
        <Image
          src="https://picsum.photos/1920/1080?random=1"
          className="w-full h-[500px] object-cover"
          loading='eager'
          width={1920}
          height={1080}
          alt='...'
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* SEARCH BAR */}
        <div className="absolute top-[80px] md:top-[100px] left-1/2 -translate-x-1/2 w-full px-4 md:px-0 md:w-auto">

          <div className="bg-white rounded-full shadow-xl flex flex-col md:flex-row overflow-hidden">

            {/* Địa điểm */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-56">
              <p className="text-md font-semibold text-black mb-1">Địa điểm</p>
              <select defaultValue="Bạn sắp đi đâu?" className="select bg-white text-gray-500 p-0 ">
                <option disabled={true} value={'Bạn sắp đi đâu?'} >Bạn sắp đi đâu?</option>
                <option value={'Inter'}>Inter</option>
                <option value={'Poppins'}>Poppins</option>
                <option value={'Raleway'}>Raleway</option>
              </select>
            </div>

            {/* Nhận phòng */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-42">
              <p className="text-md font-semibold text-black mb-1">Nhận phòng</p>
              <input type="date" className="input text-sm text-gray-500 p-0 " placeholder='Thêm ngày' />
            </div>

            {/* Trả phòng */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-42">
              <p className="text-md font-semibold text-black mb-1">Trả phòng</p>
              <input type="date" className="input text-sm text-gray-500 p-0 " placeholder='Thêm ngày' />
            </div>
            {/* Khách */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-42">
              <p className="text-md font-semibold text-black mb-1">Khách</p>
              <input type="number" className="input  text-sm text-gray-500 p-0 " placeholder='Số lượng khách' min="1" />
            </div>
            <div className="px-6 py-3 flex justify-between items-center w-full md:w-20">
              <button className="btn btn-circle bg-red-500 border-none text-white">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="absolute bottom-6 left-[50%] translate-x-[-50%]  text-white text-lg md:text-2xl font-medium">
          Nhờ có Host, mọi điều đều có thể
        </div>
      </section>
      <section className="discover px-4 md:px-10 py-10">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Khám phá những điểm đến gần đây
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Thành phố Hồ Chí Minh",
                time: "15 phút lái xe",
                img: "ho-chi-minh",
              },
              {
                name: "Cần Thơ",
                time: "3 giờ lái xe",
                img: "can-tho",
              },
              {
                name: "Nha Trang",
                time: "6.5 giờ lái xe",
                img: "nha-trang",
              },
              {
                name: "Phú Quốc",
                time: "5 giờ lái xe",
                img: "phu-quoc",
              },
              {
                name: "Thành phố Tuy Hòa",
                time: "5 giờ lái xe",
                img: "tuy-hoa",
              },
              {
                name: "Thành phố Biên Hòa",
                time: "45 phút lái xe",
                img: "bien-hoa",
              },
              {
                name: "Thị xã Long An",
                time: "2 giờ lái xe",
                img: "long-an",
              },
              {
                name: "Vũng Tàu",
                time: "2 giờ lái xe",
                img: "vung-tau",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-xl transition"
              >
                <img
                  src={`https://source.unsplash.com/100x100/?${item.img}`}
                  className="w-16 h-16 rounded-xl object-cover"
                />

                <div>
                  <p className="font-medium text-sm md:text-base">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
      <section className="px-6 md:px-12 py-10">
        <div className="container mx-auto ">
          <h2 className="text-[22px] font-semibold mb-6">
            Ở bất cứ đâu
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Toàn bộ nhà",
                img: "modern-house",
              },
              {
                title: "Chỗ ở độc đáo",
                img: "unique-house",
              },
              {
                title: "Trang trại và thiên nhiên",
                img: "farm-house",
              },
              {
                title: "Cho phép mang theo thú cưng",
                img: "dog-home",
              },
            ].map((item, i) => (
              <div key={i} className="cursor-pointer">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={`https://source.unsplash.com/600x400/?${item.img}`}
                    className="w-full h-[160px] md:h-[200px] object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <p className="mt-3 text-[15px] font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>


  );
}

export default page