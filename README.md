## Tech stack
NextJS
Typescript
TailwindCSS, DaisyUI
Axios
Redux 
HeroIcon

## Getting Started

npm run dev

## Package
### Tailwind.css
```js
//1. install
npm install tailwindcss @tailwindcss/postcss postcss

//2. postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
//3. globals.css
@import "tailwindcss";
```
### DaisyUI Tailwind Component 
```js
// 1. install
npm i -D daisyui@latest
// 2. set up to main.css
@import "tailwindcss";
@plugin "daisyui";
```

## HeroIcons
```js
// 1. install
npm i @heroicons/react
```

## Toastify
```js
// 1-cài đặt
npm install react-toastify

// 2- sử dụng
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// trong App
<ToastContainer />
```

## Redux-Redux Tookit
```js
//1. setup 
npm install @reduxjs/toolkit react-redux
//2. config
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        // sẽ add reducer vào đây
    },
});

// type cho TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

## Quy tắc 
Quy tắc đặt tên: tên biến (camel Case), tên hàm (camel Case), tên class (Pascal Case)
Chia chuẩn thư mục
Quy tắc của hàm: kích thước nhỏ, chỉ làm một việc, tên dễ hiểu, chỉ nên có ít đối số.
Nếu code dài nên tách thành nhiều hàm độc lập
Quy tắc comment:
Code nên dễ hiểu để không lệ thuộc nhiều vào comment.
Không comment dư thừa.
Không comment những điều quá rõ ràng, dễ nhận biết.
Không comment khi đóng thẻ/ngoặc
Không comment đoạn code không còn sử dụng, xóa nó luôn.
Comment để làm rõ ý nghĩa của code (logic phức tạp).
Không dư thừa biến: biến, tham số khi khai báo thì phải dùng tới
Không lặp lại code


## Các bước làm
B1 Cài thư viện
B2 Phân tích yêu cầu để tạo các page
B3 Làm UI từng page
B4 Call Api  

## Next
1. setup
2. css styling
3. fonts and images optimized
4. layouts and pages
5. navigating
6. fetch data
7. static and dynamic rendering
8. loading
9. search and pagination
10. mutating data
11. handle error
12. forms
13. authentication
14. meta data