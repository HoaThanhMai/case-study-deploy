import { configureStore } from "@reduxjs/toolkit";
import classListSlice from "../slices/classListSlice";
import teacherListSlice from "../slices/teacherListSlice";
import studentListSlice from "../slices/studentListSlice";
import loginInfoSlice from "../slices/loginInfoSlice";

const store = configureStore({
    reducer: {
        classListReducer: classListSlice.reducer,
        teacherListReducer: teacherListSlice.reducer,
        studentListReducer: studentListSlice.reducer,
        loginInfoReducer: loginInfoSlice.reducer,
    }
});

export default store;