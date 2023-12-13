import React from "react";
import { Link } from "react-router-dom";
import {
    path_dashboard_view_profile,
    path_home,
    path_login,
} from "../../services/common";
import { FaSchool, FaUserCog } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useSelector } from "react-redux";

function NavBar() {
    const loginInfo = useSelector((state) => state.loginInfoReducer);
    const { status, user_inf } = loginInfo;

    return (
        <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
            <div style={{ minWidth: "180px" }}>
                <Link to={path_home} className="logo d-flex align-items-end">
                    <FaSchool size={33} className="me-1" />
                    School Portal
                </Link>
            </div>
            <div className="d-flex align-items-center">
                {status ? (
                    <Link
                        to={path_dashboard_view_profile}
                        className="logo d-flex align-items-end">
                        {user_inf.first_name} {user_inf.last_name}
                        <FaUserCog size={33} className="ms-1" />
                    </Link>
                ) : (
                    <Link
                        to={path_login}
                        className="logo d-flex align-items-end">
                        Login
                        <FiLogIn size={33} className="ms-1" />
                    </Link>
                )}
            </div>
        </div>
    );
}

export default NavBar;
