// components/CardItem.tsx
export default function CardItem() {
    return (
        <div className="flex gap-4 cursor-pointer">
            <img
                src="https://placehold.co/300x200"
                className="w-48 h-32 object-cover rounded-xl"
            />

            <div className="flex flex-col justify-between">
                <div>
                    <p className="text-sm text-gray-500">
                        Toàn bộ căn hộ dịch vụ
                    </p>
                    <h3 className="text-lg font-semibold">
                        Romantic Apt for Long-term Living
                    </h3>
                    <div className="w-[15%] bg-gray-300 h-[3px] rounded-lg my-2"></div>
                    <p className="text-sm text-gray-500 mt-1">
                        2 khách · 1 phòng ngủ · 1 giường
                    </p>
                </div>

                <p className="font-semibold">$385 / tháng</p>
            </div>
        </div>
    )
}