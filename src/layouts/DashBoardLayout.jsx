import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Menu from "../components/Dashboard/Menu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PATH_HOME } from "../services/common";

function DashboardLayout({ children }) {
    const loginInfo = useSelector((state) => state.loginInfoReducer);
    const { status } = loginInfo;
    const navigate = useNavigate();

    useEffect(() => {
        if (status !== "logged") {
            navigate(PATH_HOME);
        }
    }, [status, navigate]);

    return (
        <div className="container">
            <NavBar />
            <div className="d-flex py-2">
                <div style={{ minWidth: "130px" }} className="border-end">
                    <Menu />
                </div>
                <div className="flex-grow-1">{children}</div>
            </div>
        </div>
    );
}

export default DashboardLayout;
