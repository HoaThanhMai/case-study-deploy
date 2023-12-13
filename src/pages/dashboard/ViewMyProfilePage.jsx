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
                {isEditing ? (
                    <ProfileEditForm></ProfileEditForm>
                ) : (
                    <ProfileCard></ProfileCard>
                )}
                <button className="btn btn-dark" onClick={toggleEditing}>
                    {isEditing ? "View Profile" : "Update Profile"}
                </button>
            </div>
        </DashboardLayout>
    );
}

export default ViewMyProfilePage;
