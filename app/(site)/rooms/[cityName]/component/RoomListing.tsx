import { getRoomsByLocationId } from "@/(api)/room";
import RoomItem from "./RoomItem";
import { getCookie } from "@/utils/cookieServer";
import { LOCATION_AT } from "@/utils/config";
import { RoomVM } from "@/(viewModel)/RoomVM";
import { ResponseData } from "@/(viewModel)/ResponseData";
import RoomListingTitle from "./RoomListingTitle";
import { getSearchPaginLocations } from "@/(api)/location";
import { LocationVM } from "@/(viewModel)/LocationVM";
import { stringToSlug } from "@/utils/text";
import { redirect } from "next/navigation";

type Props = {
    params: Promise<{ cityName: string }> | { cityName: string }
}

export default async function Listing(props: Props) {
    const { cityName } = await props.params;
    const response = await getSearchPaginLocations(1, 8, '');;
    let locations = response?.content.data as LocationVM[];
    const location = locations.find(loc => stringToSlug(loc.tinhThanh) === cityName);
    if (!location) {
        redirect('/not-found');
    }
    const rooms = await getRoomsByLocationId(location.id as number) as ResponseData<RoomVM[]>;
    const roomsData = rooms?.content || [] as RoomVM[];
    return (
        <div className="p-6 space-y-4">
            <RoomListingTitle roomsData={roomsData} />
            <h2 className="text-3xl font-semibold">
                Chỗ ở tại khu vực bạn đã chọn
            </h2>
            {roomsData.map((room) => (
                <RoomItem key={room.id} room={room} />
            ))}
        </div>
    )
}