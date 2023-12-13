import React from "react";
import { Link } from "react-router-dom";
import {
    path_dashboard_view_profile,
    path_home,
    path_login,
} from "../../services/common";

let isLogin = false;

function NavBar() {
    return (
        <div className="container-fluid d-flex align-items-center border-bottom py-2">
            <div className="container">
                <Link to={path_home} className="logo">
                    <i className="fa-solid fa-school fa-xl"></i> Home
                </Link>
            </div>
            <div className="d-flex">
                {isLogin ? (
                    <Link to={path_dashboard_view_profile} className="logo">
                        <i className="fa-solid fa-circle-user fa-xl"></i>
                    </Link>
                ) : (
                    <Link to={path_login} className="icon">
                        <i className="fa-solid fa-right-to-bracket fa-xl"></i>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default NavBar;
