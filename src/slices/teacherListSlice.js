import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API_GET_TEACHER } from "../services/common";

const initialState = {
    status: "idle",
    teacherlist: []
}

const teacherListSlice = createSlice({
    name: "teacherlist",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {

        builder
            .addCase(fetchTeacherListThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchTeacherListThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.teacherlist = action.payload;
            })
            .addCase(updateTeacherThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(updateTeacherThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.teacherlist = state.teacherlist.map((p) => {
                    if (p.id === action.payload.id) {
                        return action.payload
                    }
                    return p;
                })
            })
            .addCase(addTeacherThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(addTeacherThunkAction.fulfilled, (state, action) => {
                state.teacherlist
                    .unshift(action.payload);
            });
    }
});

const fetchTeacherListThunkAction = createAsyncThunk("teacherlist/fetchTeacherListThunkAction", async () => {
    console.log("khoioioio");
    let res = await fetch(`${URL_API_GET_TEACHER}`)
    let data = await res.json();
    console.log();
    return data;
})

const updateTeacherThunkAction = createAsyncThunk("teacherlist/updateTeacherThunkAction", async (teacher) => {
    let res = await fetch(`${URL_API_GET_TEACHER}/${teacher?.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(teacher)
    });
    let data = await res.json();
    return data;
})

const addTeacherThunkAction = createAsyncThunk("teacherlist/addTeacherThunkAction", async (teacher) => {
    let res = await fetch(`${URL_API_GET_TEACHER}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(teacher)
    });
    let data = await res.json();
    return data;
})

export { fetchTeacherListThunkAction, updateTeacherThunkAction, addTeacherThunkAction }

export default teacherListSlice;