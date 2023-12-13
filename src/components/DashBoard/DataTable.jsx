import React from "react";
import { useSelector } from "react-redux";

function DataTable(props) {
    const classlist = useSelector((state) => state.classListReducer);

    const teacherList = useSelector((state) => state.teacherListReducer);

    const studentList = useSelector((state) => state.studentListReducer);

    let type = props.type;

    const getTeacherName = (teacherId) => {
        const teacher = teacherList.find((teacher) => teacher.id === teacherId);
        return teacher
            ? `${teacher.first_name} ${teacher.last_name}`
            : "Unknown Teacher";
    };

    const createTableClassHeader = () => {
        const headers = ["Class ID", "Name", "Form Teacher"];
        return (
            <thead className="table-dark">
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
        );
    };

    const createTableTeacherHeader = () => {
        const headers = [
            "Teacher ID",
            "Name",
            "Date of Birth",
            "Gender",
            "Mobile",
            "Email",
            "Address",
        ];
        return (
            <thead className="table-dark">
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
        );
    };

    const createTableStudentHeader = () => {
        const headers = [
            "Student ID",
            "Name",
            "Date of Birth",
            "Gender",
            "Mobile",
            "Email",
            "Address",
        ];
        return (
            <thead className="table-dark">
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
        );
    };

    const createTableClassBody = () => {
        return (
            <tbody>
                {classlist.map((classItem) => (
                    <tr key={classItem.id}>
                        <td>{classItem.id}</td>
                        <td>{classItem.name}</td>
                        <td>{getTeacherName(classItem.teacher_id)}</td>
                    </tr>
                ))}
            </tbody>
        );
    };

    const createTableTeacherBody = () => {
        return (
            <tbody>
                {teacherList.map((teacherItem) => (
                    <tr key={teacherItem.id}>
                        <td>{teacherItem.id}</td>
                        <td>
                            {teacherItem.first_name} {teacherItem.last_name}
                        </td>
                        <td>{teacherItem.dob}</td>
                        <td>{teacherItem.gender}</td>
                        <td>{teacherItem.mobile}</td>
                        <td>{teacherItem.email}</td>
                        <td>{teacherItem.address}</td>
                    </tr>
                ))}
            </tbody>
        );
    };

    const createTableStudentBody = () => {
        return (
            <tbody>
                {studentList.map((studentItem) => (
                    <tr key={studentItem.id}>
                        <td>{studentItem.id}</td>
                        <td>
                            {studentItem.first_name} {studentItem.last_name}
                        </td>
                        <td>{studentItem.dob}</td>
                        <td>{studentItem.gender}</td>
                        <td>{studentItem.mobile}</td>
                        <td>{studentItem.email}</td>
                        <td>{studentItem.address}</td>
                    </tr>
                ))}
            </tbody>
        );
    };

    const createTableBody = (type) => {
        switch (type) {
            case "class":
                return createTableClassBody();
            case "teacher":
                return createTableTeacherBody();
            case "student":
                return createTableStudentBody();
            default:
                break;
        }
    };

    const createTableHeader = (type) => {
        switch (type) {
            case "class":
                return createTableClassHeader();
            case "teacher":
                return createTableTeacherHeader();
            case "student":
                return createTableStudentHeader();
            default:
                break;
        }
    };

    return (
        <table className="table table-striped table-bordered">
            {createTableHeader(type)}
            {createTableBody(type)}
        </table>
    );
}

export default DataTable;
