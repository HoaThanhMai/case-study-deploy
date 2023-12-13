import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import TeacherList from "../../components/Dashboard/TeacherList/TeacherList";

function TeacherListPage() {
    return (
        <DashboardLayout>
            <div className="container d-flex">
                <TeacherList />
            </div>
        </DashboardLayout>
    );
}

export default TeacherListPage;
