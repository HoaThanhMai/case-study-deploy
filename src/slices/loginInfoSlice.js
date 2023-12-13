import { createSlice } from "@reduxjs/toolkit";

const loginInfoSlice = createSlice({
    name: "loginInfo",
    initialState: {
        status: true,
        user_inf: {
            id: "01HHHDAR5PET8NZ2REXTE6Z17E",
            first_name: "Brittni",
            last_name: "Ferneley",
            dob: "7/4/2023",
            gender: "female",
            mobile: "6496664798",
            address: "480 Marquette Terrace",
            avatar: "https://robohash.org/utquaerem.png?size=100x100&set=set1",
            role: "student",
            email: "bferneley7@drupal.org",
            password: "mF8?9)oz",
        }
    },
    reducer: {}
});

export default loginInfoSlice;