import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API_GET_CLASS } from "../services/common";

const classListSlice = createSlice({
    name: "classList",

    initialState: {
        status: "idle",
        classList: []
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchClassListThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchClassListThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.classList = action.payload;
            })
    }
});

export const fetchClassListThunkAction = createAsyncThunk("classList/fetchClassListThunkAction", async () => {
    let res = await fetch(URL_API_GET_CLASS);
    let data = await res.json();
    return data;
})

export default classListSlice;