import { configureStore } from "@reduxjs/toolkit";
import loginInfoSlice from "../slices/loginInfoSlice";
import dataTableSlice from "../slices/dataTableSlice";
import classListSlice from "../slices/classListSlice";
import studentListSlice from "../slices/studentListSlice";
import teacherListSlice from "../slices/teacherListSlice";

const store = configureStore({
    reducer: {
        loginInfoReducer: loginInfoSlice.reducer,
        dataTableReducer: dataTableSlice.reducer,
        classListReducer: classListSlice.reducer,
        studentListReducer: studentListSlice.reducer,
        teacherListReducer: teacherListSlice.reducer,
    }
});

export default store;