import React from "react";
import NavBar from "../components/NavBar/NavBar";

function MainLayout({ children }) {
    return (
        <div className="container">
            <NavBar />
            {children}
        </div>
    );
}

export default MainLayout;
