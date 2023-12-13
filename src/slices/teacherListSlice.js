import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API_GET_TEACHER } from "../services/common";

const teacherListSlice = createSlice({
    name: "teacherList",
    initialState: {
        status: "idle",
        teachers: []
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchTeacherListThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchTeacherListThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.teachers = action.payload;
            })
    }
});

export const fetchTeacherListThunkAction = createAsyncThunk("teacherList/fetchTeacherListThunkAction", async () => {
    let res = await fetch(URL_API_GET_TEACHER);
    let data = await res.json();
    return data;
})

export default teacherListSlice;