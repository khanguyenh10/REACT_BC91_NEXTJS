import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import modalReducer from "./reducer/modalReducer";
export const store = configureStore({
    reducer: {
        userReducer,
        modalReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;