import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Menu from "../components/DashBoard/Menu";

function DashBoardLayout({ children }) {
    return (
        <div className="container">
            <NavBar />
            <div className="d-flex">
                <div>
                    <Menu />
                </div>
                <div className="flex-grow-1">{children}</div>
            </div>
        </div>
    );
}

export default DashBoardLayout;
