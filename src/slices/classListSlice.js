import { createSlice } from "@reduxjs/toolkit";

const classListSlice = createSlice({
    name: "classList",
    initialState: [
        {
            id: "01HHHDK6RH1AX4FBV7BV0NWDY0",
            name: ".Net Core",
            teacher_id: "01HHHDAR5E6J6XYXGT3KD40R32",
        },
        {
            id: "01HHHDK6RKRHBMPPAK5Q7FQXVA",
            name: "Python",
            teacher_id: "01HHHDAR5KAM5JQ62HVCR796B0",
        },
        {
            id: "01HHHDK6RQKBY5F95GA1ZGHPYM",
            name: "ReactJS",
            teacher_id: "01HHHDAR57VD5JFVKM72WYN0C7",
        },
    ]
});

export default classListSlice;