import { getRoomsByLocationId } from "@/(api)/room";
import CardItem from "./CardItem";
import { getCookie } from "@/utils/cookieServer";
import { LOCATION_AT } from "@/utils/config";
import { RoomVM } from "@/(viewModel)/RoomVM";
import { ResponseData } from "@/(viewModel)/ResponseData";
import RoomListingTitle from "./RoomListingTitle";
import { getSearchLocations } from "@/(api)/location";
import { LocationVM } from "@/(viewModel)/LocationVM";
import { stringToSlug } from "@/utils/text";
import { redirect } from "next/navigation";

type Props = {
    params: Promise<{ cityName: string }> | { cityName: string }
}

export default async function Listing(props: Props) {
    const { cityName } = await props.params;
    console.log(cityName);
    const response = await getSearchLocations(1, 8, '');;
    let locations = response?.content.data as LocationVM[];
    const location = locations.find(loc => stringToSlug(loc.tinhThanh) === cityName);
    if (!location) {
        redirect('/not-found');
    }
    const rooms = await getRoomsByLocationId(location.id) as ResponseData<RoomVM[]>;
    const roomsData = rooms?.content.splice(0, 30) || [] as RoomVM[];
    console.log('roomsData', roomsData);
    return (
        <div className="p-6 space-y-4">
            <RoomListingTitle roomsData={[]} />
            <h2 className="text-3xl font-semibold">
                Chỗ ở tại khu vực bạn đã chọn
            </h2>
            {roomsData.map((room) => (
                <CardItem key={room.id} room={room} location={location} />
            ))}
        </div>
    )
}