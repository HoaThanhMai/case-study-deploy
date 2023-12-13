import { createSlice } from "@reduxjs/toolkit";

const studentListSlice = createSlice({
    name: "studentListSlice",
    initialState: [
        {
            id: "01HHHDAR52S3WJJR5JPSCRZBQB",
            first_name: "Olivie",
            last_name: "Coulston",
            dob: "12/9/2023",
            gender: "female",
            mobile: "3231786487",
            address: "9905 Rutledge Parkway",
            avatar: "https://robohash.org/eumfugitvoluptatem.png?size=100x100&set=set1",
            role: "student",
            email: "ocoulston0@squarespace.com",
            password: "rP3<m8<Qngs",
        },
        {
            id: "01HHHDAR5972BT5K12GJEHRS4J",
            first_name: "Silvain",
            last_name: "Gammage",
            dob: "1/16/2023",
            gender: "male",
            mobile: "1711565701",
            address: "7 Dorton Park",
            avatar: "https://robohash.org/veniamrepellatmagnam.png?size=100x100&set=set1",
            role: "student",
            email: "sgammage2@parallels.com",
            password: "cE5!T@fx7DI'H",
        },
        {
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
        },
        {
            id: "01HHHDAR5SV3DN7C56FEBT2KSP",
            first_name: "Miquela",
            last_name: "Connichie",
            dob: "1/17/2023",
            gender: "male",
            mobile: "2956193425",
            address: "4283 Vermont Terrace",
            avatar: "https://robohash.org/excepturirerumlaboriosam.png?size=100x100&set=set1",
            role: "student",
            email: "mconnichie8@economist.com",
            password: 'nB6/%Rz"u8_',
        },
    ],
    reducer: {}
});

export default studentListSlice;