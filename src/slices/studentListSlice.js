import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API_GET_STUDENT } from "../services/common";

const studentListSlice = createSlice({
    name: "studentList",
    initialState: {
        status: "idle",
        students: []
    },
    reducer: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchStudentListThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchStudentListThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.students = action.payload;
            })
    }
});

export const fetchStudentListThunkAction = createAsyncThunk("studentList/fetchStudentListThunkAction", async () => {
    let res = await fetch(URL_API_GET_STUDENT);
    let data = await res.json();
    return data;
})

export default studentListSlice;