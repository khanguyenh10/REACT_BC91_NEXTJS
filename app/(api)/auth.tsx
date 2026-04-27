import { LoginVM } from "@/(viewModel)/LoginVM";
import { ResponseData } from "@/(viewModel)/ResponseData";
import { fetcher } from "./fetcher";
import { UserVM } from "@/(viewModel)/UserVM";

export const postSignIn = async (data: LoginVM): Promise<ResponseData<{ token: string, user: UserVM }> | null> => {
    return await fetcher(`/auth/signin`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}
export const postSignUp = async (data: UserVM): Promise<ResponseData<UserVM> | null> => {
    return await fetcher(`/auth/signup`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}