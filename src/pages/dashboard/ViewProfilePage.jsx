import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProfileCard from "../../components/Dashboard/ViewProfile/ProfileCard";
import ProfileEditForm from "../../components/Dashboard/ViewProfile/ProfileEditForm";

function ViewProfilePage() {
    const loading = false;

    return (
        <DashboardLayout>
            <div className="container-fluid">
                {loading === "loading" ? (
                    <p>Loading ...</p>
                ) : (
                    <div>
                        <ProfileEditForm></ProfileEditForm>
                        <ProfileCard></ProfileCard>
                        <button className="btn btn-dark">Edit Profile</button>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}

export default ViewProfilePage;
