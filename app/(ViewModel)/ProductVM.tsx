// {
//     "id": 2,
//     "name": "vans old school",
//     "alias": "vans-old-school",
//     "price": 200,
//     "feature": false,
//     "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
//     "size": [
//         "32",
//         "33",
//         "34",
//         "35"
//     ],
//     "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     "quantity": 200,
//     "detaildetailedImages": [
//         "rotate(0deg)",
//         "rotateY(180deg)",
//         "rotate(45deg)",
//         "rotate(-45deg)"
//     ],
//     "image": "http://apistore.cybersoft.edu.vn/images/van-old-school.png",
//     "imgLink": "van-old-school.png",
//     "categories": [
//         {
//             "id": "VANS_CONVERSE",
//             "category": "VANS_CONVERSE"
//         }
//     ],
//     "relatedProducts": [
//         {
//             "id": 3,
//             "name": "converse chuck taylor",
//             "alias": "converse-chuck-taylor",
//             "feature": false,
//             "price": 250,
//             "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
//             "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             "image": "http://apistore.cybersoft.edu.vn/images/converse-chuck-taylor.png",
//             "imgLink": null
//         },
//         {
//             "id": 2,
//             "name": "vans old school",
//             "alias": "vans-old-school",
//             "feature": false,
//             "price": 200,
//             "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
//             "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             "image": "http://apistore.cybersoft.edu.vn/images/van-old-school.png",
//             "imgLink": null
//         },
//         {
//             "id": 1,
//             "name": "vans black",
//             "alias": "vans-black-black",
//             "feature": false,
//             "price": 200,
//             "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
//             "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             "image": "http://apistore.cybersoft.edu.vn/images/vans-black-black.png",
//             "imgLink": null
//         }
//     ]
// }

export interface ProductVM {
    id: number;
    name: string;
    alias: string;
    feature: boolean;
    price: number;
    description: string;
    size: string[];
    shortDescription: string;
    quantity: number;
    detaildetailedImages: string[];
    image: string;
    imgLink: string;
    categories: CategoryVM[];
    relatedProducts: ProductVM[];
}
export interface CategoryVM {
    id: string;
    category: string;
}