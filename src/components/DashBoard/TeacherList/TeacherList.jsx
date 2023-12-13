import React from "react";
import DataTable from "../DataTable";

function TeacherList() {
    return (
        <div className="container">
            <div style={{ minHeight: "70px" }}>
                <p>Teacher List Info</p>
            </div>
            <div className="flex-grow-1">
                <DataTable type="teacher"></DataTable>
            </div>
        </div>
    );
}

export default TeacherList;
