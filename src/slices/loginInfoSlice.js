import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loginInfoSlice = createSlice({
    name: "loginInfo",
    initialState: {
        status: "idle",
        user_inf: {
            id: "",
            first_name: "",
            last_name: "",
            dob: "",
            gender: "",
            mobile: "",
            address: "",
            avatar: "",
            role: "",
            email: "",
            password: ""
        }
    },
    reducers: {

        setEmail: (state, action) => {
            state.user_inf.email = action.payload
        },

        setPasswd: (state, action) => {
            state.user_inf.password = action.payload
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUserInfoThunkAction.pending, (state, action) => {
                state.status = "logging";
            })
            .addCase(fetchUserInfoThunkAction.fulfilled, (state, action) => {
                console.log(action.payload);
                if (action.payload.length !== 1) {
                    state.status = "emailfail";
                }
                else {
                    let user = action.payload[0];
                    if (user.password !== state.user_inf.password) {
                        state.status = "passwdfail";
                    }
                    else {
                        state.status = "logged";
                        state.user_inf = user;
                    }
                }
            })
    }
});

export const fetchUserInfoThunkAction = createAsyncThunk("loginInfo/fetchUserInfoThunkAction", async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    return data;
})

export default loginInfoSlice;