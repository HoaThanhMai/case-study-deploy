import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ClassList from "../../components/Dashboard/ClassList/ClassList";

function ClassListPage() {
    return (
        <DashboardLayout>
            <div className="container d-flex">
                <ClassList />
            </div>
        </DashboardLayout>
    );
}

export default ClassListPage;
