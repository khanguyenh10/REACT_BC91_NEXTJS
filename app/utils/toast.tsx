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
    let messageError = data?.response?.data?.message;
    toast.error(messageError ? messageError : data?.message ? data?.message : data);
};
export const toastSuccess = (message: string) => {
    toast.success(message);
}


export const toastConfirmDelete = ({
    title = 'Xác nhận xóa',
    description = 'Bạn có chắc muốn xóa dữ liệu này?',
    onConfirm,
}: {
    title?: string;
    description?: string;
    onConfirm: () => void | Promise<void>;
}) => {
    toast.info(
        ({ closeToast }) => (
            <div className="flex flex-col gap-3">
                <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm opacity-70">{description}</p>
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        className="btn btn-sm"
                        onClick={() => closeToast?.()}
                    >
                        Hủy
                    </button>

                    <button
                        className="btn btn-sm btn-error text-white"
                        onClick={async () => {
                            await onConfirm();
                            closeToast?.();
                        }}
                    >
                        Xóa
                    </button>
                </div>
            </div>
        ),
        {
            autoClose: false,
            closeOnClick: false,
            draggable: false,
        }
    );
};