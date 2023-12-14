import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API_GET_MEMBER } from "../services/common";

const initialState = {
    status: "idle",
    state: "ok",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {

        builder
            .addCase(updateUserInfoThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(updateUserInfoThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                if (action.payload.length === 1) {
                    if (state.user_inf.id === action.payload.id) {
                        state.state = "ok";
                    } else {
                        state.state = "ng";
                    }
                }
            })
            .addCase(addUserThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(addUserThunkAction.fulfilled, (state, action) => {
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

const updateUserInfoThunkAction = createAsyncThunk("user/updateUserInfoThunkAction", async (user) => {
    let res = await fetch(`${URL_API_GET_MEMBER}/${user?.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    let data = await res.json();
    return data;
})

const addUserThunkAction = createAsyncThunk("user/addUserThunkAction", async (user) => {
    let res = await fetch(`${URL_API_GET_MEMBER}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    let data = await res.json();
    return data;
})

export { updateUserInfoThunkAction, addUserThunkAction }

export default userSlice;