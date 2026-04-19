"use client";


export default function Error({
    error,
}: {
    error: Error;
}) {

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10 text-base-content">
            <div className="w-full max-w-3xl rounded-[2rem] border border-base-300 bg-white/95 p-8  backdrop-blur-xl">
                <div className="mb-8 flex flex-col gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-error/10 px-4 py-2 text-error">
                        <span className="text-sm font-semibold">Lỗi hệ thống</span>
                    </div>
                    <div>
                        <h1 className="text-4xl font-semibold">Đã xảy ra sự cố</h1>
                        <p className="mt-2 text-base-content/75">
                            Ứng dụng gặp lỗi khi xử lý yêu cầu. Bạn có thể thử lại hoặc quay về trang chủ.
                        </p>
                    </div>
                </div>

                <div className="rounded-3xl border border-base-300 bg-base-100 p-6 ">
                    <div className="mb-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Chi tiết lỗi</p>
                    </div>
                    <div className="grid gap-3">
                        <div className="rounded-2xl bg-base-200 p-4">
                            <p className="text-sm text-neutral">Tên lỗi</p>
                            <p className="mt-1 text-base font-medium">{error.name || "Không xác định"}</p>
                        </div>
                        <div className="rounded-2xl bg-base-200 p-4">
                            <p className="text-sm text-neutral">Thông điệp</p>
                            <p className="mt-1 text-base font-medium">{error.message || "Không có thông tin"}</p>
                        </div>
                        {error.stack ? (
                            <div className="rounded-2xl bg-base-200 p-4">
                                <p className="text-sm text-neutral">Trace</p>
                                <pre className="mt-2 max-h-56 overflow-auto whitespace-pre-wrap text-xs leading-relaxed text-neutral">
                                    {error.stack}
                                </pre>
                            </div>
                        ) : null}
                    </div>
                </div>


            </div>
        </div>
    );
}