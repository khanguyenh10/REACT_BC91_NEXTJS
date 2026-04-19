import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import React from 'react'
import Book from '@/(site)/component/Book';
import Location from '@/(site)/component/Location';
import SearchLocation from '@/(site)/component/SearchLocation';


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

          <div className="bg-white rounded-full shadow-xl flex flex-col md:flex-row">

            {/* Địa điểm */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r w-full md:w-56">
              <p className="text-md font-semibold text-black mb-1">Địa điểm</p>
              <Location />
            </div>

            <Book />
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
          <SearchLocation />

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
                img: "/noi-1.jpg",
              },
              {
                title: "Chỗ ở độc đáo",
                img: "/noi-2.jpg",
              },
              {
                title: "Trang trại và thiên nhiên",
                img: "/noi-3.jpg",
              },
              {
                title: "Cho phép mang theo thú cưng",
                img: "/noi-4.jpg",
              },
            ].map((item, i) => (
              <div key={i} className="cursor-pointer">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    alt={item.title}
                    width={400}
                    height={300}
                    src={`${item.img}`}
                    className="w-full h-[160px] md:h-[200px] object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <p className="mt-3 text-[15px] font-semibold">
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