import { createSlice } from "@reduxjs/toolkit";

const teacherFilterSlice = createSlice({
    name: "teacherFilter",
    initialState: {
        followClass: "",
        followStudent: "",
        searchText: ""
    },
    reducers: {}
})

export default teacherFilterSlice;