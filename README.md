
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
````