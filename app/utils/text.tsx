import dayjs from "dayjs";

export const limitText = (text: string, maxText: number) => {
    let newText = text;
    if (text.length > maxText) {
        newText = text.slice(0, maxText) + '...';
    }
    return newText;
}
export function stringToSlug(str: string) {
    return str
        .toLowerCase()
        .normalize("NFD")                 // tách dấu
        .replace(/[\u0300-\u036f]/g, "") // xoá dấu
        .replace(/đ/g, "d")
        .replace(/[^a-z0-9\s-]/g, "")    // xoá ký tự đặc biệt
        .trim()
        .replace(/\s+/g, "-")            // space → -
        .replace(/-+/g, "-");            // bỏ -- dư
}
export function formateDate(dateString: string, format = 'DD/MM/YYYY HH:mm') {
    return dayjs(dateString).format(format);
}