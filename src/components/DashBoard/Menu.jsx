import React from "react";
import { NavLink } from "react-router-dom";
import {
    path_dashboard_class_list,
    path_dashboard_student_list,
    path_dashboard_view_profile,
} from "../../services/common";

function Menu() {
    return (
        <div className="container-fluid">
            <h5>Menu</h5>
            <div className="d-flex flex-column">
                <NavLink
                    to={path_dashboard_view_profile}
                    className="menu d-flex align-items-center">
                    <i className="fa-solid fa-id-card fa-sm"></i>
                    View profile
                </NavLink>
                <NavLink
                    to={path_dashboard_class_list}
                    className="menu d-flex align-items-center">
                    <i className="fa-solid fa-landmark fa-sm"></i>
                    Class list
                </NavLink>
                <NavLink
                    to={path_dashboard_class_list}
                    className="menu d-flex align-items-center">
                    <i className="fa-solid fa-person-chalkboard fa-sm"></i>
                    Teacher list
                </NavLink>
                <NavLink
                    to={path_dashboard_student_list}
                    className="menu d-flex align-items-center">
                    <i className="fa-solid fa-chalkboard-user fa-sm"></i>
                    Student list
                </NavLink>
            </div>
        </div>
    );
}

export default Menu;
