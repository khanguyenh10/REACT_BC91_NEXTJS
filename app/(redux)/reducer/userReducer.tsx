import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState { // dùng interface để dễ dàng mở rộng sau này
    date: {
        fromDate: string,
        toDate: string,
    },
    user: any,
    locatedAt: string,
    numberOfGuests: number,

}

const initialState: UserState = {
    date: {
        fromDate: '',
        toDate: '',
    },
    user: null,
    locatedAt: '',
    numberOfGuests: 1,
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setUser: (state: UserState, action: PayloadAction<any>) => {
            state.user = action.payload
        },
        setLocatedAt: (state: UserState, action: PayloadAction<string>) => {
            state.locatedAt = action.payload
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

export const { setUser, setLocatedAt, setNumberOfGuests, setFromDate, setToDate } = userReducer.actions

export default userReducer.reducer

