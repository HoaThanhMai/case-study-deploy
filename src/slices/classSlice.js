import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API_GET_CLASS } from "../services/common";

const initialState = {
    status: "idle",
    state: "ok",
}

const classSlice = createSlice({
    name: "class",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {

        builder
            .addCase(updateClassThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(updateClassThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                if (action.payload.length === 1) {
                    if (state.user_inf.id === action.payload.id) {
                        state.state = "ok";
                    } else {
                        state.state = "ng";
                    }
                }
            })
            .addCase(addClassThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(addClassThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                if (action.payload.length === 1) {
                    state.state = "ok";
                }
                else {
                    state.state = "ng";
                }
            });
    }
});

const updateClassThunkAction = createAsyncThunk("class/updateClassThunkAction", async (cls) => {
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

const addClassThunkAction = createAsyncThunk("class/addClassThunkAction", async (cls) => {
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

export { updateClassThunkAction, addClassThunkAction }

export default classSlice;