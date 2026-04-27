import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    isOpen: boolean;
    contentType: "LOGIN" | "REGISTER" | null;
}

const initialState: ModalState = {
    isOpen: false,
    contentType: null,
};

const modalReducer = createSlice({
    name: 'modalReducer',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalState["contentType"]>) => {
            state.isOpen = true;
            state.contentType = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.contentType = null;
        },
    },
});

export const { openModal, closeModal } = modalReducer.actions;
export default modalReducer.reducer;