import React from "react";
import DataTable from "../DataTable";

function ClassList() {
    return (
        <div className="container">
            <div style={{ minHeight: "70px" }}>
                <p>Class List Info</p>
            </div>
            <div className="flex-grow-1">
                <DataTable type="class"></DataTable>
            </div>
        </div>
    );
}

export default ClassList;
