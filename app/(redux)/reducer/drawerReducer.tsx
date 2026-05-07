import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DrawserState {
    isOpen?: boolean;
    dataDetail?: any;
    action: "ADD" | "EDIT" | null,
    type: "ROOMS" | "USERS" | "LOCATIONS" | 'ROOM_ORDERS' | null
}

const initialState: DrawserState = {
    isOpen: false,
    type: null,
    dataDetail: {},
    action: null
};

const drawerReducer = createSlice({
    name: 'drawerReducer',
    initialState,
    reducers: {
        openDrawer: (state, action: PayloadAction<DrawserState>) => {
            state.isOpen = true;
            state.type = action.payload.type;
            state.dataDetail = action.payload.dataDetail;
            state.action = action.payload.action
        },
        closeDrawser: (state) => {
            state.isOpen = false;
            state.type = null;
            state.dataDetail = {};
            state.action = null
        },
    },
});

export const { openDrawer, closeDrawser } = drawerReducer.actions;
export default drawerReducer.reducer;