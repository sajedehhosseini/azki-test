import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TAuthState = {};

const initialState: TAuthState = {};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserInfo(state, action: PayloadAction<TAuthState>) {
            return {...state, ...action.payload};
        },
        resetUserInfo() {
            return initialState;
        },
    },
});

export const {setUserInfo, resetUserInfo} = authSlice.actions;
export default authSlice.reducer;
