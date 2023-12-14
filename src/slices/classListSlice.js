import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API_GET_CLASS } from "../services/common";

const initialState = {
    status: "idle",
    classlist: []
}

const classListSlice = createSlice({
    name: "classlist",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {

        builder
            .addCase(fetchClassListThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchClassListThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.classlist = action.payload;
            })
            .addCase(updateClassThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(updateClassThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.classlist = state.classlist.map((p) => {
                    if (p.id === action.payload.id) {
                        return action.payload
                    }
                    return p;
                })
            })
            .addCase(addClassThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(addClassThunkAction.fulfilled, (state, action) => {
                state.classlist.unshift(action.payload);
                state.status = "idle";
            })
            .addCase(deleteClassThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(deleteClassThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.classlist = state.classlist.filter((p) => p.id !== action.payload?.id)
            });
    }
});

const fetchClassListThunkAction = createAsyncThunk("classlist/fetchClassListThunkAction", async () => {
    let res = await fetch(`${URL_API_GET_CLASS}/`)
    let data = await res.json();
    return data;
})

const updateClassThunkAction = createAsyncThunk("classlist/updateClassThunkAction", async (cls) => {
    let res = await fetch(`${URL_API_GET_CLASS}/${cls?.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cls)
    });
    let data = await res.json();
    return data;
})

const addClassThunkAction = createAsyncThunk("classlist/addClassThunkAction", async (cls) => {
    let res = await fetch(`${URL_API_GET_CLASS}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cls)
    });
    let data = await res.json();
    return data;
})

const deleteClassThunkAction = createAsyncThunk("classlist/deleteClassThunkAction", async (cls) => {
    let res = await fetch(`${URL_API_GET_CLASS}/${cls?.id}`, {
        method: "DELETE"
    });
    let result = await res.json()
    return cls
})

export { fetchClassListThunkAction, updateClassThunkAction, addClassThunkAction, deleteClassThunkAction }

export default classListSlice;