import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API_GET_STUDENT } from "../services/common";

const initialState = {
    status: "idle",
    studentlist: []
}

const studentListSlice = createSlice({
    name: "studentlist",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {

        builder
            .addCase(fetchStudentListThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchStudentListThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.studentlist = action.payload;
            })
            .addCase(updateStudentThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(updateStudentThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.studentlist = state.studentlist.map((p) => {
                    if (p.id === action.payload.id) {
                        return action.payload
                    }
                    return p;
                })
            })
            .addCase(addStudentThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(addStudentThunkAction.fulfilled, (state, action) => {
                state.studentlist
                    .unshift(action.payload);
            });
    }
});

const fetchStudentListThunkAction = createAsyncThunk("studentlist/fetchStudentListThunkAction", async () => {
    let res = await fetch(`${URL_API_GET_STUDENT}`)
    let data = await res.json();
    return data;
})

const updateStudentThunkAction = createAsyncThunk("studentlist/updateStudentThunkAction", async (stu) => {
    let res = await fetch(`${URL_API_GET_STUDENT}/${stu?.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(stu)
    });
    let data = await res.json();
    return data;
})

const addStudentThunkAction = createAsyncThunk("studentlist/addStudentThunkAction", async (stu) => {
    let res = await fetch(`${URL_API_GET_STUDENT}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(stu)
    });
    let data = await res.json();
    return data;
})

export { updateStudentThunkAction, addStudentThunkAction, fetchStudentListThunkAction }

export default studentListSlice;