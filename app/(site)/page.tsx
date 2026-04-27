import BookingSearch from '@/(component)/shared/BookingSearch';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import React from 'react'
import LocationSearch from './component/LocationSearch';
import Link from 'next/link';


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
        <BookingSearch />

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
          <LocationSearch />

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
                href: "/rooms/ho-chi-minh",
              },
              {
                title: "Chỗ ở độc đáo",
                img: "/noi-2.jpg",
                href: "/rooms/nha-trang",
              },
              {
                title: "Trang trại và thiên nhiên",
                img: "/noi-3.jpg",
                href: "/rooms/da-lat",
              },
              {
                title: "Cho phép mang theo thú cưng",
                img: "/noi-4.jpg",
                href: "/rooms/da-nang",
              },
            ].map((item, i) => (
              <div key={i} className="cursor-pointer">
                <Link href={item.href} className="overflow-hidden rounded-2xl block hover:text-secondary">
                  <Image
                    alt={item.title}
                    width={400}
                    height={300}
                    src={`${item.img}`}
                    className="w-full h-[160px] md:h-[200px] object-cover hover:scale-105 transition duration-300"
                  />
                  <p className="mt-3 text-[15px] font-semibold">
                    {item.title}
                  </p>
                </Link>


              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}

export default page