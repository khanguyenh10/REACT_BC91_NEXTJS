// {
//       "id": 1,
//       "tenViTri": "Quận 1",
//       "tinhThanh": "Hồ Chí Minh",
//       "quocGia": "Việt Nam",
//       "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg"

import { LocationVM } from "./LocationVM";

//     },
export interface SearchLocationVM {
    "pageIndex": number;
    "pageSize": number;
    "totalRow": number;
    "keywords": null | string,
    "data": LocationVM[];
}