import { createSlice } from "@reduxjs/toolkit";

const classFilterSlice = createSlice({
    name: "classFilter",
    initialState: {
        followTeacher: "",
        followStudent: "",
        searchText: ""
    },
    reducers: {}
})

export default classFilterSlice;