"use server";

import { ACCESSTOKEN } from "@/utils/config";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const logoutAction = async () => {
    const cookieStore = await cookies(); // 👈 phải await
    cookieStore.delete(ACCESSTOKEN);
    revalidatePath("/", "layout");
}