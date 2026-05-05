import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    isOpen: boolean;
    data: object;
    contentType: "ADD" | "UPDATE" | "DELETE" | null
}

const initialState: ModalState = {
    isOpen: false,
    contentType: null,
    data: {}
};

const modalReducer = createSlice({
    name: 'modalReducer',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalState>) => {
            state.isOpen = true;
            state.contentType = action.payload.contentType;
            state.data = {};
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.contentType = null;
            state.data = {};
        },
    },
});

export const { openModal, closeModal } = modalReducer.actions;
export default modalReducer.reducer;