import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Menu from "../components/Dashboard/Menu";

function DashboardLayout({ children }) {
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
