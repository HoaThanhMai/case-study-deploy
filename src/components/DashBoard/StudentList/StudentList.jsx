import React from "react";
import DataTable from "../DataTable";

function StudentList() {
    return (
        <div className="container">
            <div style={{ minHeight: "70px" }}>
                <p>Student List Info</p>
            </div>
            <div className="flex-grow-1">
                <DataTable type="student"></DataTable>
            </div>
        </div>
    );
}

export default StudentList;
