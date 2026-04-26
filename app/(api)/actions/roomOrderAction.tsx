"use server";
import { FormStateVM } from "@/(viewModel)/FormStateVM";
import { toBoolean } from "@/utils/text";
import dayjs from "dayjs";
import { parse } from "path";
import { postRoomOrder } from "../roomOrder";
import { RoomOrderVM } from "@/(viewModel)/RoomOrderVM";
import { ActionState } from "@/(hook)/useServerAction";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(isSameOrBefore);

export const roomOrderAction = async (prevState: FormStateVM, formData: FormData) => {
    let resData: ActionState;
    let data = Object.fromEntries(formData);
    if (toBoolean(data.isRoomOrdered)) {
        return resData = {
            status: "error",
            message: "Phòng đã có khách đặt"
        }
    }
    if (dayjs(data.toDate as string).isSameOrBefore(dayjs(data.fromDate as string))) {
        console.log('dewa')
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
        console.log('postData', postData);
        await postRoomOrder(postData);
        //update lại data
        revalidatePath(data.pathname as string);
        return resData = {
            status: "success",
            message: 'Đặt phòng thành công'
        }

    } catch (error) {
        console.log('error', error);
        return {
            status: "error",
            message: 'Đã xảy ra lỗi khi đặt phòng',
        };
    }


}