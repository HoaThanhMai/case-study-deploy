import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API_GET_MEMBER } from "../services/common";

const initialState = {
    status: "idle",
    loginState: "logout",
    user_inf: {
        id: 0,
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
}

const loginInfoSlice = createSlice({
    name: "loginInfo",
    initialState,
    reducers: {

        setEmail: (state, action) => {
            state.user_inf.email = action.payload
        },

        setPasswd: (state, action) => {
            state.user_inf.password = action.payload
        },

        logOut: (state, action) => {
            state.status = "idle";
            state.loginState = "logout";
            state.user_inf = { ...initialState.user_inf };
        },
    },

    extraReducers: (builder) => {

        builder
            .addCase(loginWithEmailPasswdThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(loginWithEmailPasswdThunkAction.fulfilled, (state, action) => {
                if (action.payload.length !== 1) {
                    state.loginState = "emailfail";
                }
                else {
                    let user = action.payload[0];
                    if (user.password !== state.user_inf.password) {
                        state.loginState = "passwdfail";
                    }
                    else {
                        state.loginState = "logged";
                        state.user_inf = user;
                    }
                }
                state.status = "idle";
            })
            .addCase(updateUserInfoThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(updateUserInfoThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                console.log(action.payload);
                if (state.user_inf?.id === action.payload?.id) {
                    state.user_inf = action.payload
                    console.log(state.user_inf);
                }
            });
    }
});

const loginWithEmailPasswdThunkAction = createAsyncThunk("loginInfo/loginWithEmailPasswdThunkAction", async (user) => {
    let res = await fetch(`${URL_API_GET_MEMBER}?email=${user.email}`);
    let data = await res.json();
    return data;
})

const updateUserInfoThunkAction = createAsyncThunk("loginInfo/updateUserInfoThunkAction", async (user) => {
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

export { loginWithEmailPasswdThunkAction, updateUserInfoThunkAction }

export default loginInfoSlice;