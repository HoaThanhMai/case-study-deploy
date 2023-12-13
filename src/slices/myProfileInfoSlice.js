import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const myProfileInfoSlice = createSlice({
    name: "myProfileInfo",
    initialState: {
        status: "idle",
        profile: {
            myProfile: {
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
            },
            editProfile: {
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
    },
    reducers: {

        editFirstName: (state, action) => {
            state.profile.editProfile.first_name = action.payload;
        },

        editLastName: (state, action) => {
            state.profile.editProfile.last_name = action.payload;
        },

        editDateOfBirth: (state, action) => {
            state.profile.editProfile.dob = action.payload;
        },

        editGender: (state, action) => {
            state.profile.editProfile.gender = action.payload;
        },

        editMobile: (state, action) => {
            state.profile.editProfile.mobile = action.payload;
        },

        editAddress: (state, action) => {
            state.profile.editProfile.address = action.payload;
        },

        editPasswd: (state, action) => {
            state.profile.editProfile.password = action.payload;
        },

        cancelEdit: (state, action) => {
            state.profile.editProfile = { ...state.profile.myProfile };
        },

        stopEdit: (state, action) => {
            state.profile.editProfile = { ...state.profile.myProfile };
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(setMyProfileThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(setMyProfileThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.profile.myProfile = action.payload;
                state.profile.editProfile = action.payload;
            })
            .addCase(fetchMyProfileThunkAction.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchMyProfileThunkAction.fulfilled, (state, action) => {
                state.status = "idle";
                state.profile.myProfile = action.payload;
                state.profile.editProfile = action.payload;
            })
    }
});

export const fetchMyProfileThunkAction = createAsyncThunk("myProfileInfo/fetchMyProfileThunkAction", async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    return data;
})

export const setMyProfileThunkAction = createAsyncThunk("myProfileInfo/setMyProfileThunkAction", async (url, updatedData) => {
    console.log("setMyProfileThunkAction");
    console.log(updatedData);
    let res = await fetch(url, { method: "PUT", header: { 'Content-Type': 'application/json' }, body: JSON.stringify(updatedData) });
    let data = await res.json();
    return data;
})

export default myProfileInfoSlice;