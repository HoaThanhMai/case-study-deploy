import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dataTableSlice from "../../slices/dataTableSlice";
import { fetchClassListThunkAction } from "../../slices/classListSlice";
import { fetchStudentListThunkAction } from "../../slices/studentListSlice";
import { fetchTeacherListThunkAction } from "../../slices/teacherListSlice";


function DataTable(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchClassListThunkAction());
        dispatch(fetchStudentListThunkAction());
        dispatch(fetchTeacherListThunkAction());
    }, [dispatch]);


    let type = props.type;
    dispatch(dataTableSlice.actions.setType(type))

    const classList = useSelector((state) => state.classListReducer.classlist)
    console.log(classList);

    const teacherList = useSelector((state) => state.teacherListReducer.teacherlist)
    console.log(teacherList);

    const studentList = useSelector((state) => state.studentListReducer.studentlist)
    console.log(studentList);

    const getTeacherName = (teacherId) => {
        const teacher = teacherList.find(teacher => teacher.id === teacherId);
        return teacher
            ? `${teacher.first_name} ${teacher.last_name}`
            : "Unknown Teacher";
    };

    const getObjectbyId = (arr, id) => {
        return arr.find(item => item.id === id);
    }

    const [selectedKey, setSelectedKey] = useState(null);

    const handleRadioChange = (key) => {
        setSelectedKey(key);
        switch (type) {
            case "class":
                let cls = getObjectbyId(classList, key);
                dispatch(dataTableSlice.actions.setSelectedClass(cls));
                break;
            case "teacher":
                let teacher = getObjectbyId(teacherList, key);
                dispatch(dataTableSlice.actions.setSelectedTeacher(teacher));
                break;
            case "student":
                let student = getObjectbyId(studentList, key);
                dispatch(dataTableSlice.actions.setSelectedStudent(student));
                break;
            default:
                break;
        }
    };

    const createTableClassHeader = () => {
        const headers = ["Name", "Form Teacher", "#"];
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
            "Name",
            "Date of Birth",
            "Gender",
            "Mobile",
            "Email",
            "Address",
            "#"
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
            "Name",
            "Date of Birth",
            "Gender",
            "Mobile",
            "Email",
            "Address",
            "#"
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
                {classList?.map((classItem, index) => (
                    <tr key={classItem.id}>
                        <td>{classItem.name}</td>
                        <td>{getTeacherName(classItem.teacher_id)}</td>
                        <td>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value={classItem.id}
                                    checked={selectedKey === classItem.id}
                                    onChange={() => handleRadioChange(classItem.id)}
                                />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    };

    const createTableTeacherBody = () => {
        return (
            <tbody>
                {teacherList?.map((teacherItem) => (
                    <tr key={teacherItem.id}>
                        <td>
                            {teacherItem.first_name} {teacherItem.last_name}
                        </td>
                        <td>{teacherItem.dob}</td>
                        <td>{teacherItem.gender}</td>
                        <td>{teacherItem.mobile}</td>
                        <td>{teacherItem.email}</td>
                        <td>{teacherItem.address}</td>
                        <td>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value={teacherItem.id}
                                    checked={selectedKey === teacherItem.id}
                                    onChange={() => handleRadioChange(teacherItem.id)}
                                />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    };

    const createTableStudentBody = () => {
        return (
            <tbody>
                {studentList?.map((studentItem) => (
                    <tr key={studentItem.id}>
                        <td>
                            {studentItem.first_name} {studentItem.last_name}
                        </td>
                        <td>{studentItem.dob}</td>
                        <td>{studentItem.gender}</td>
                        <td>{studentItem.mobile}</td>
                        <td>{studentItem.email}</td>
                        <td>{studentItem.address}</td>
                        <td>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value={studentItem.id}
                                    checked={selectedKey === studentItem.id}
                                    onChange={() => handleRadioChange(studentItem.id)}
                                />
                            </div>
                        </td>
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
