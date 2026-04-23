import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

const useRouting = () => {
    const params = useParams(); // lấy tham số /:tham số
    const [searchParams, setSearchParams] = useSearchParams(); // lấy tham số /?a=1&b=2
    const navigate = useRouter(); // chuyển trang
    const pathname = usePathname();
    return {
        params,
        searchParams,
        setSearchParams,
        navigate,
        pathname,

    }

}
export default useRouting