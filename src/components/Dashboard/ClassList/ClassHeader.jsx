import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux";
import useFetchResource from "../../../custom-hooks/useFetchResource";
import { URL_API_GET_CLASS, URL_API_GET_TEACHER } from "../../../services/common";
import { addClassThunkAction, updateClassThunkAction } from "../../../slices/classListSlice";

const schema = yup.object({
    name: yup.string().required(),
    teacher: yup.string().required(),
})

function ClassHeader() {

    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema)
    })

    const selectedClass = useSelector((state) => state.dataTableReducer.selectedClass)

    const [isEditing, setIsEditing] = useState(false);
    const [isAddNew, setIsAddNew] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    const [curClass, setcurClass] = useState({});

    const teacherList = useFetchResource(URL_API_GET_TEACHER);

    const getTeacherNameById = (id) => {
        let teacher = teacherList.find(item => item.id === id);
        return `${teacher?.first_name} ${teacher?.last_name}`
    }

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchClassByID() {
            let res = await fetch(`${URL_API_GET_CLASS}/${selectedClass?.id}`);
            let cls = await res.json();
            setcurClass(cls);
        }
        fetchClassByID();
    }, [selectedClass?.id])

    const handleAddNewButtonClick = () => {
        setIsAddNew(true);
        setIsEditing(false);
        setValue("name", "");
        reset()
    }

    const handleCloseButton = () => {
        setIsAddNew(false);
        setIsEditing(false);
        reset();
    }

    const handleUpdateButtonClick = () => {
        setIsAddNew(false);
        setIsEditing(true);
        setValue("name", curClass.name);
        reset();
    }

    const handleAddClass = (data) => {
        const teacher = JSON.parse(data.teacher)
        let cls = {
            name: data.name,
            teacher_id: teacher.id

        };
        dispatch(addClassThunkAction(cls));
    }

    const handleUpdateClass = (data) => {
        const teacher = JSON.parse(data.teacher)
        let cls = {
            ...curClass,
            name: data.name,
            teacher_id: teacher.id
        };
        dispatch(updateClassThunkAction(cls));
    }

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                <h5>{isEditing ? "Edit Class Info" : isAddNew ? "Update Class Info" : "Show Class Info"}</h5>
                <div>
                    <button className="btn btn-primary me-3" onClick={handleUpdateButtonClick}>Edit</button>
                    <button className="btn btn-secondary" onClick={handleAddNewButtonClick}>Add</button>
                </div>
            </div>
            {
                ((isEditing && curClass !== null) || isAddNew) &&
                (<div className="align-items-center justify-content-between" style={{ minWidth: '300px' }}>
                    <form onSubmit={(e) => { isEditing ? handleSubmit(handleUpdateClass)(e) : handleSubmit(handleAddClass)(e) }}>
                        <div className="customer-info p-3">
                            <div className="form-group mb-3">
                                <label className="form-label">Class Name</label>
                                <input type="text"
                                    className={`form-control ${errors?.name?.message ? 'is-invalid' : ''}`}
                                    placeholder={isEditing ? curClass.name : ""}
                                    {...register("name")}
                                />
                                <span className="invalid-feedback">{errors?.name?.message}</span>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Teacher</label>
                                <select
                                    className={`form-select form-select-sm ${errors?.teacher?.message ? 'is-invalid' : ''}`}
                                    defaultValue={''}
                                    placeholder={(isEditing ? getTeacherNameById(curClass.teacher_id) : "")}
                                    {...register('teacher')}
                                >
                                    <option value={''} disabled>Please select Teacher</option>
                                    {
                                        teacherList?.map((teacher) => (
                                            <option key={teacher.id} value={JSON.stringify(teacher)}>{`${teacher.first_name} ${teacher.last_name}`}</option>
                                        ))
                                    }
                                </select>
                                <span className="invalid-feedback">{errors?.teacher?.message}</span>
                            </div>
                        </div>
                        <div className="py-3 mt-2 d-flex align-items-center justify-content-center text-white btn-checkout">
                            <button className="btn btn-dark me-3" type="submit">{isEditing ? "Update Class" : "Add Class"}</button>
                            <button className="btn btn-secondary me-3" type="button" onClick={handleCloseButton}>Close</button>
                        </div>
                    </form>
                </div >)
            }
        </div >
    );
}

export default ClassHeader;