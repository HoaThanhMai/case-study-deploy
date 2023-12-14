import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    type: "None",
    selectedClass: {

    },
    selectedStudent: {

    },
    selectedTeacher: {

    }
}

const dataTableSlice = createSlice({
    name: "datatable",
    initialState,
    reducers: {
        setSelectedClass: (state, action) => {
            state.selectedClass = action.payload;
        },

        setSelectedTeacher: (state, action) => {
            state.selectedTeacher = action.payload;
        },

        setSelectedStudent: (state, action) => {
            state.selectedStudent = action.payload;
        },

        setType: (state, action) => {
            state.type = action.payload;
        },
    },
});

export default dataTableSlice;