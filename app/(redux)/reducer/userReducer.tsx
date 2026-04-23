import { LOCATION_AT, setCookieClient } from '@/utils/config';
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
}

const initialState: UserState = {
    date: {
        fromDate: dayjs().add(1, 'day').format('YYYY-MM-DD'), // mặc định là ngày hiện tại
        toDate: dayjs().add(1, 'week').format('YYYY-MM-DD'),
    },
    user: null,
    locationAt: {
        id: null,
        tinhThanh: null,
    },
    numberOfGuests: 1,
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setUser: (state: UserState, action: PayloadAction<any>) => {
            state.user = action.payload
        },
        setLocationAt: (state: UserState, action: PayloadAction<{ id: number | null, tinhThanh: string | null }>) => {
            state.locationAt.id = action.payload.id
            state.locationAt.tinhThanh = action.payload.tinhThanh
            setCookieClient(LOCATION_AT, encodeURIComponent(JSON.stringify(action.payload)), 1) // lưu cookie 7 ngày
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

export const { setUser, setLocationAt, setNumberOfGuests, setFromDate, setToDate } = userReducer.actions

export default userReducer.reducer
