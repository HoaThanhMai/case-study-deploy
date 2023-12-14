import { configureStore } from "@reduxjs/toolkit";
import loginInfoSlice from "../slices/loginInfoSlice";
import classFilterSlice from '../slices/classFilterSlice';
import teacherFilterSlice from "../slices/teacherFilterSlice";
import studentFilterSlice from "../slices/studentFilterSlice";
import classSlice from "../slices/classSlice";
import userSlice from "../slices/userSlice";
import dataTableSlice from "../slices/dataTableSlice";

const store = configureStore({
    reducer: {
        loginInfoReducer: loginInfoSlice.reducer,
        classFilter: classFilterSlice.reducer,
        teacherFilter: teacherFilterSlice.reducer,
        studentFilter: studentFilterSlice.reducer,
        classReducer: classSlice.reducer,
        userReducer: userSlice.reducer,
        dataTableReducer: dataTableSlice.reducer,
    }
});

export default store;