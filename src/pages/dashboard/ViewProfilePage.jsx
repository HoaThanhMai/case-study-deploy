import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProfileCard from "../../components/Dashboard/ViewProfile/ProfileCard";
import ProfileEditForm from "../../components/Dashboard/ViewProfile/ProfileEditForm";

const info = {
    id: 1,
    name: "Tran Van Khoi",
    avatar: "",
    email: "",
    mobile: "",
    password: "",
    class: {},
    cpa: 5,
    status: "",
};

function ViewProfilePage() {
    const loading = false;

    return (
        <DashboardLayout>
            <div className="container-fluid d-flex">
                {loading === "loading" ? (
                    <p>Loading ...</p>
                ) : (
                    <div>
                        <ProfileEditForm></ProfileEditForm>
                        <ProfileCard></ProfileCard>
                        <button className="btn btn-dark">Edit</button>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}

export default ViewProfilePage;
