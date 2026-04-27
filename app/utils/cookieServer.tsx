"use server";
// utils/cookie.server.ts
import { cookies } from "next/headers";

const setCookie = async (
    name: string,
    value: string,
    options?: {
        maxAge?: number;
        path?: string;
    }
) => {
    const cookieStore = await cookies();

    cookieStore.set(name, value, {
        httpOnly: true,
        secure: true,
        path: options?.path || "/",
        maxAge: options?.maxAge || 60 * 60 * 24, // 1 ngày
    });
};
const getCookie = async (name: string): Promise<any | null> => {
    const cookieStore = await cookies();
    const cookieValue = cookieStore.get(name)?.value;
    if (!cookieValue) return null;
    try {
        return JSON.parse(decodeURIComponent(cookieValue));
    } catch {
        return cookieValue;
    }
};
export { getCookie, setCookie };