import Image from 'next/image'
import React from 'react'
import RentedRoomListing from './components/RentedRoomListing';
import UpdateInfo from './components/UpdateInfo';
import { ResponseData } from '@/(viewModel)/ResponseData';
import { UserVM } from '@/(viewModel)/UserVM';
import { getUser } from '@/(api)/user';
import { getCookie } from '@/utils/cookieServer';
import { ACCESSTOKEN } from '@/utils/config';
import { redirect } from 'next/navigation';

type Props = {
    params: Promise<{
        userId: string
    }> | {
        userId: string
    }
}

const page = async (props: Props) => {
    const token = await getCookie(ACCESSTOKEN);
    const isLoggined = !!token;
    if (!isLoggined) return redirect('/');
    const { userId } = await props.params;
    const resUserDetail = await getUser(Number(userId)) as ResponseData<UserVM>;
    const userDetail = resUserDetail?.content as UserVM;
    return (
        <>
            <section className="profile relative">
                <div className="relative" >
                    <Image
                        src="https://picsum.photos/1920/1080?random=4"
                        className="w-full h-[500px] object-cover"
                        loading='eager'
                        width={1920}
                        height={1080}
                        alt='...'
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                </div>


                <div className="absolute  top-1/2 left-[50%]  -translate-x-1/2 -translate-y-1/2  text-white text-2xl  font-medium uppercase wow animate__fadeIn" >
                    Thông tin người dùng
                </div >
            </section>
            <section className='room-listing'>
                <div className="container mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-15">

                        <div className="lg:col-span-1">
                            <UpdateInfo user={userDetail} userCreatedAt={resUserDetail.dataTime} />
                        </div>

                        <div className="lg:col-span-3">
                            <RentedRoomListing userId={userId} />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default page

