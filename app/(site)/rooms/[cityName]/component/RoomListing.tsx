import CardItem from "./CardItem";

export default function Listing() {
    return (
        <div className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">
                Chỗ ở tại khu vực bạn đã chọn
            </h2>

            <CardItem />
            <CardItem />
            <CardItem />
        </div>
    )
}