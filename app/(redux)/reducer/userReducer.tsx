"use client";

import { getLocalStorage, LOCATION_AT, removeLocalStorage, saveLocalStorage, setCookieClient, USER } from '@/utils/config';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import dayjs from 'dayjs';

export interface UserState { // dùng interface để dễ dàng mở rộng sau này
    date: {
        fromDate: string,
        toDate: string,
    },
    user: any,
    locationAt: {
        id: number | null,
        tinhThanh: string | null,
    },
    numberOfGuests: number,
    isLoggedin: boolean
}

const initialState: UserState = {
    date: {
        fromDate: dayjs().add(1, 'day').format('YYYY-MM-DD'), // mặc định là ngày hiện tại
        toDate: dayjs().add(1, 'week').format('YYYY-MM-DD'),
    },
    user: {},
    locationAt: {
        id: null,
        tinhThanh: null,
    },
    numberOfGuests: 1,
    isLoggedin: false
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setUser: (state: UserState, action: PayloadAction<any>) => {
            state.user = action.payload
        },
        setIsLoggined: (state: UserState, action: PayloadAction<boolean>) => {
            state.isLoggedin = action.payload
            //logout
            if (!action.payload) {
                removeLocalStorage(USER);
            }
        },
        setLocationAt: (state: UserState, action: PayloadAction<{ id: number | null, tinhThanh: string | null }>) => {
            state.locationAt.id = action.payload.id
            state.locationAt.tinhThanh = action.payload.tinhThanh
        },
        setNumberOfGuests: (state: UserState, action: PayloadAction<number>) => {
            state.numberOfGuests = action.payload
        },
        setFromDate: (state: UserState, action: PayloadAction<string>) => {
            state.date.fromDate = action.payload
        },
        setToDate: (state: UserState, action: PayloadAction<string>) => {
            state.date.toDate = action.payload
        },

    }
});

export const { setUser, setLocationAt, setNumberOfGuests, setFromDate, setToDate, setIsLoggined } = userReducer.actions

export default userReducer.reducer
