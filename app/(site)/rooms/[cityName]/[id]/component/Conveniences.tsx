import { RoomVM } from '@/(viewModel)/RoomVM';
import React from 'react'

type Props = {
    room: RoomVM;
}

const Conveniences = (props: Props) => {
    const { room } = props;
    const renderConvenience = (convenience: boolean, label: string) => {
        if (convenience) {
            return (
                <div className="flex items-center gap-2">
                    <span>✔</span>
                    <span>{label}</span>
                </div>
            );
        }
        return null;
    }
    return (
        < div className="border-t pt-4" >
            <h3 className="font-semibold mb-3">Tiện nghi</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {renderConvenience(room.mayGiat, "Máy giặt")}
                {renderConvenience(room.banLa, "Bàn là")}
                {renderConvenience(room.tivi, "TV")}
                {renderConvenience(room.dieuHoa, "Điều hòa")}
                {renderConvenience(room.wifi, "Wifi")}
                {renderConvenience(room.bep, "Bếp")}
                {renderConvenience(room.doXe, "Đỗ xe")}
                {renderConvenience(room.hoBoi, "Hồ bơi")}
                {renderConvenience(room.banUi, "Bàn ủi")}
            </div>
        </ div>
    )
}

export default Conveniences