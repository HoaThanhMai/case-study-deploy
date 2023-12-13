import React from "react";
import { Link } from "react-router-dom";
import {
    PATH_DASHBOARD_VIEW_PROFILE,
    PATH_HOME,
    PATH_LOGIN,
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
                <Link to={PATH_HOME} className="logo d-flex align-items-end">
                    <FaSchool size={33} className="me-1" />
                    School Portal
                </Link>
            </div>
            <div className="d-flex align-items-center">
                {status === "logged" ? (
                    <Link
                        to={PATH_DASHBOARD_VIEW_PROFILE}
                        className="logo d-flex align-items-end">
                        {user_inf.first_name} {user_inf.last_name}
                        <FaUserCog size={33} className="ms-1" />
                    </Link>
                ) : (
                    <Link
                        to={PATH_LOGIN}
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
