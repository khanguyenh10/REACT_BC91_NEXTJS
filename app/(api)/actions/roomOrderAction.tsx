"use server";
import { toBoolean } from "@/utils/text";
import dayjs from "dayjs";
import { parse } from "path";
import { postRoomOrder } from "../roomOrder";
import { RoomOrderVM } from "@/(viewModel)/RoomOrderVM";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { FormState } from "@/(hook)/useServerAction";

dayjs.extend(isSameOrBefore);

export const roomOrderAction = async (prevState: FormState, formData: FormData) => {
    let resData: FormState;
    let data = Object.fromEntries(formData);
    if (toBoolean(data.isRoomOrdered)) {
        return resData = {
            status: "error",
            message: "Phòng đã có khách đặt"
        }
    }
    if (dayjs(data.toDate as string).isSameOrBefore(dayjs(data.fromDate as string))) {
        return resData = {
            status: "error",
            message: 'Ngày trả phòng phải sau ngày nhận phòng'
        }
    }
    try {
        let postData: RoomOrderVM = {
            maNguoiDung: 0,
            maPhong: Number(data.roomId),
            ngayDen: data.fromDate as string,
            ngayDi: data.toDate as string,
            soLuongKhach: Number(data.numberOfGuests)
        };
        await postRoomOrder(postData);
        //update lại data
        revalidatePath(data.pathname as string);
        return resData = {
            status: "success",
            message: 'Đặt phòng thành công'
        }

    } catch (error) {
        return {
            status: "error",
            message: 'Đã xảy ra lỗi khi đặt phòng',
        };
    }


}