import React from "react";
import MainLayout from "../layouts/MainLayout";
import LoginForm from "../components/Login/LoginForm";

function LoginPage() {
    return (
        <MainLayout>
            <div className="d-flex justify-content-center">
                <LoginForm></LoginForm>
            </div>
        </MainLayout>
    );
}

export default LoginPage;
