import { ResponseData } from "../(viewModel)/ResponseData";
import { LocationVM } from "../(viewModel)/LocationVM";
import { toastError } from "../utils/toast";
import { fetcher } from "./fetcher"

export const getLocations = async (): Promise<ResponseData<LocationVM[]> | null> => {
    return await fetcher('/vi-tri');
}