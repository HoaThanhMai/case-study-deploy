import React, { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProfileCard from "../../components/Dashboard/ViewProfile/ProfileCard";
import ProfileEditForm from "../../components/Dashboard/ViewProfile/ProfileEditForm";

function ViewMyProfilePage() {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };

    return (
        <DashboardLayout>
            <div className="container-fluid">
                <button className="btn btn-dark" style={{ minWidth: "100px" }} onClick={toggleEditing}>
                    {isEditing ? "View Profile" : "Edit Profile"}
                </button>
                {isEditing ? (
                    <ProfileEditForm></ProfileEditForm>
                ) : (
                    <ProfileCard></ProfileCard>
                )}
            </div>
        </DashboardLayout>
    );
}

export default ViewMyProfilePage;
