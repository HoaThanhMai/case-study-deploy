import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import StudentList from "../../components/Dashboard/StudentList/StudentList";

function StudentListPage() {
    return (
        <DashboardLayout>
            <div className="container d-flex">
                <StudentList />
            </div>
        </DashboardLayout>
    );
}

export default StudentListPage;
