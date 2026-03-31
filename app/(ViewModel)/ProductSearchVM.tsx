// {
//       "sizes": [
//         32,
//         33,
//         34,
//         35
//       ],
//       "id": 4,
//       "name": "nike adapt bb",
//       "alias": "nike-adapt-bb",
//       "price": 350,
//       "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
//       "size": "[32,33,34,35]",
//       "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       "quantity": 200,
//       "deleted": false,
//       "categories": "[{\"id\": \"NIKE\",\"category\":\"NIKE\"}]",
//       "relatedProducts": "[5,6,7]",
//       "feature": true,
//       "image": "http://apistore.cybersoft.edu.vn/images/nike-adapt-bb.png",
//       "imgLink": "http://apistore.cybersoft.edu.vn/images/nike-adapt-bb.png"
//     },

export interface ProductSearchVM {
    sizes: number[];
    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: string;
    relatedProducts: string;
    feature: boolean;
    image: string;
    imgLink: string;
}