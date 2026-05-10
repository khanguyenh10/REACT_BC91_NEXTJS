// app/components/Pagination.tsx
import Link from "next/link";

type Props = {
    pageIndex: number;
    pageSize: number;
    totalRow: number;
    query: string;
};

export default function Pagination({
    pageIndex,
    pageSize,
    totalRow,
    query
}: Props) {
    const totalPage = Math.ceil(totalRow / pageSize);

    const getPages = () => {
        const pages: (number | string)[] = [];

        pages.push(1);

        if (pageIndex > 3) pages.push("...");

        for (
            let i = Math.max(2, pageIndex - 1);
            i <= Math.min(totalPage - 1, pageIndex + 1);
            i++
        ) {
            pages.push(i);
        }

        if (pageIndex < totalPage - 2) pages.push("...");

        if (totalPage > 1) pages.push(totalPage);

        return pages;
    };

    const pages = getPages();
    console.log(pages);

    const createLink = (p: number) => {
        const params = new URLSearchParams();
        params.set("query", query);
        params.set("page", p.toString());
        return `?${params.toString()}`;
    };

    return (
        <div className="flex items-center gap-1 mt-4">
            {/* Prev */}
            <Link
                href={createLink(pageIndex - 1)}
                className={`btn btn-sm btn-ghost ${pageIndex === 1 ? "pointer-events-none opacity-50" : ""
                    }`}
            >
                ‹
            </Link>

            {/* Pages */}
            {pages.map((p, i) =>
                p === "..." ? (
                    <span key={i} className="px-2">
                        ...
                    </span>
                ) : (
                    <Link
                        key={i}
                        href={createLink(p as number)}
                        className={`btn btn-sm ${p === pageIndex ? "btn-primary" : "btn-ghost"
                            }`}
                    >
                        {p}
                    </Link>
                )
            )}

            {/* Next */}
            <Link
                href={createLink(pageIndex + 1)}
                className={`btn btn-sm btn-ghost ${pageIndex === totalPage ? "pointer-events-none opacity-50" : ""
                    }`}
            >
                ›
            </Link>
        </div>
    );
}