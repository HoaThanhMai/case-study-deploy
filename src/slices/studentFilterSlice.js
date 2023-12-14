import { createSlice } from "@reduxjs/toolkit";

const studentFilterSlice = createSlice({
    name: "studentFilter",
    initialState: {
        followTeacher: "",
        followClass: "",
        searchText: ""
    },
    reducers: {
        setSelectedClass: (action, state) => {

        }
    }
})

export default studentFilterSlice;