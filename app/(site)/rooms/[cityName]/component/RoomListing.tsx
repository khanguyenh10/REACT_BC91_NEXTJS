import { getRoomsByLocationId } from "@/(api)/room";
import CardItem from "./CardItem";

export default async function Listing() {

    const rooms = await getRoomsByLocationId(1);
    return (
        <div className="p-6 space-y-4">
            <p > Có 2 chỗ ở tại Đà Lạt • 22/04/2026 – 22/04/2026</p>
            <h2 className="text-3xl font-semibold">
                Chỗ ở tại khu vực bạn đã chọn
            </h2>

            <CardItem />
            <CardItem />
            <CardItem />
        </div>
    )
}