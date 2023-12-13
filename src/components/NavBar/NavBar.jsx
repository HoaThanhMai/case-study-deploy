import React from "react";
import { Link } from "react-router-dom";
import { path_dashboard, path_home, path_login } from "../../services/common";

let isLogin = true;

function NavBar() {
    return (
        <div className="container-fluid d-flex align-items-center border-bottom mt-2">
            <div className="container">
                <Link to={path_home} className="logo">
                    <i class="fa-solid fa-school"></i> Home
                </Link>
            </div>
            <div className="d-flex mt-2">
                {isLogin ? (
                    <Link to={path_dashboard} className="logo">
                        <i class="fa-solid fa-circle-user"></i>
                    </Link>
                ) : (
                    <Link to={path_login} className="icon">
                        <i class="fa-solid fa-right-to-bracket"></i>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default NavBar;
