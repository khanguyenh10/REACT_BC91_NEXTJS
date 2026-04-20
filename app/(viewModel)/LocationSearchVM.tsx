
import { LocationVM } from "./LocationVM";

export interface LocationSearchVM {
    "pageIndex": number;
    "pageSize": number;
    "totalRow": number;
    "keywords": null | string,
    "data": LocationVM[];
}