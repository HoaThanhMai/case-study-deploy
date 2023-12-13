import React from "react";
import { NavLink } from "react-router-dom";
import {
    PATH_DASHBOARD_CLASS_LIST,
    PATH_DASHBOARD_STUDENT_LIST,
    PATH_DASHBOARD_TEACHER_LIST,
    PATH_DASHBOARD_VIEW_PROFILE,
} from "../../services/common";
import { ImProfile } from "react-icons/im";
import { MdClass } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";

function Menu() {
    return (
        <div className="">
            <h5>Menu</h5>
            <div className="d-flex flex-column">
                <NavLink
                    to={PATH_DASHBOARD_VIEW_PROFILE}
                    className="menu d-flex align-items-center">
                    <ImProfile size={15} className="me-2" />
                    My profile
                </NavLink>
                <NavLink
                    to={PATH_DASHBOARD_CLASS_LIST}
                    className="menu d-flex align-items-center">
                    <MdClass size={15} className="me-2" />
                    Class list
                </NavLink>
                <NavLink
                    to={PATH_DASHBOARD_TEACHER_LIST}
                    className="menu d-flex align-items-center">
                    <GiTeacher size={15} className="me-2" />
                    Teacher list
                </NavLink>
                <NavLink
                    to={PATH_DASHBOARD_STUDENT_LIST}
                    className="menu d-flex align-items-center">
                    <PiStudent size={15} className="me-2" />
                    Student list
                </NavLink>
            </div>
        </div>
    );
}

export default Menu;
