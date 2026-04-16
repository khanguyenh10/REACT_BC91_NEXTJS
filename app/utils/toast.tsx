import { toast } from "react-toastify";

export const toastPromise = (promise: Promise<any>, message = 'Xử lý') => {
    return toast.promise(promise, {
        pending: `${message}...`,
        success: `${message} thành công`,
        error: {
            render({ data }: { data: any }) {
                let messageError = data?.response.data.message;
                // data chính là error
                return messageError ? messageError : data?.message;
            }
        }
    });
};
export const toastError = (data: any) => {
    console.log('data', data);
    // let messageError = data?.response?.data?.message;
    // console.log('messageError', messageError);
    // toast.error(messageError ? messageError : data?.message);
};
export const toastSuccess = (message: string) => {
    toast.success(message);
}