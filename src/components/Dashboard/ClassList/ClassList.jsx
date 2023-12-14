import React from "react";
import DataTable from "../DataTable";
import ClassHeader from "./ClassHeader";

function ClassList() {
    return (
        <div className="container">
            <ClassHeader />
            <div className="flex-grow-1">
                <DataTable type="class"></DataTable>
            </div>
        </div>
    );
}

export default ClassList;
