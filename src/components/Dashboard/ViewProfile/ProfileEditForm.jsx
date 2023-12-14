import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateUserInfoThunkAction } from "../../../slices/loginInfoSlice";

const role_list = ['student', 'teacher', 'admin'];

const schema = yup.object({
    avatar: yup.string().url("Invalid URL"),
    first_name: yup.string(),
    last_name: yup.string(),
    role: yup.string().oneOf(role_list, "Selected item is not valid"),
    dob: yup.date(),
    email: yup.string().email("Invalid email address"),
    mobile: yup.string(),
    address: yup.string(),
    gender: yup.string(),
    password: yup.string().min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]*$/,
            'Password must contain at least one letter and one number'
        ),
});

function ProfileEditForm(props) {
    const loginInfo = useSelector((state) => state.loginInfoReducer);
    const { user_inf } = loginInfo;

    const dispatch = useDispatch();
    const handleUpdateProfile = (data) => {
        let user_edit = {
            ...user_inf,
            ...data,
        };
        dispatch(updateUserInfoThunkAction(user_edit));
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const {
        avatar,
        first_name,
        last_name,
        role,
        dob,
        email,
        mobile,
        address,
        gender,
        password,
    } = user_inf;

    return (
        <div className="d-flex align-items-center justify-content-center row g-0">
            <form
                style={{ maxWidth: "900px", width: "100%" }}
                className="col-md-2"
                onSubmit={handleSubmit(handleUpdateProfile)}>
                <div className=" form-group card border-0 mb-3">
                    <div className="row g-0">
                        <div className="col-md-3">
                            <div className="mb-3 text-center">
                                <img src={avatar} alt="" style={{ maxWidth: "400px", maxHeight: "200px" }} ></img>
                            </div>
                            <div className="col-md-9">
                                <div className="d-flex flex-column align-items-start">
                                    <label htmlFor="in_avatar_edit">Avatar</label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${errors?.avatar?.message ? "is-invalid" : ""
                                            }`}
                                        id="in_avatar_edit"
                                        placeholder={avatar}
                                        {...register("avatar")}
                                    />
                                    <span className="invalid-feedback">
                                        {errors?.avatar?.message}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="car-body">
                                <div className="form-group">
                                    <label htmlFor="in_role_edit">Role</label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${errors?.role?.message
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                        id="in_role_edit"
                                        placeholder={role}
                                        {...register("role")}
                                    />
                                    <span className="invalid-feedback">
                                        {errors?.role?.message}
                                    </span>
                                </div>
                                <div className="d-flex">
                                    <div className="col-md-6 me-2">
                                        <label htmlFor="in_first_name_edit">
                                            Fist Name
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control form-control-sm ${errors?.first_name?.message
                                                ? "is-invalid"
                                                : ""
                                                }`}
                                            id="in_first_name_edit"
                                            placeholder={first_name}
                                            {...register("first_name")}
                                        />
                                        <span className="invalid-feedback">
                                            {errors?.first_name?.message}
                                        </span>
                                    </div>
                                    <div className="flex-grow-1">
                                        <label htmlFor="in_last_name_edit">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control form-control-sm ${errors?.last_name?.message
                                                ? "is-invalid"
                                                : ""
                                                }`}
                                            id="in_last_name_edit"
                                            placeholder={last_name}
                                            {...register("last_name")}
                                        />
                                        <span className="invalid-feedback">
                                            {errors?.last_name?.message}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="in_dob_edit">
                                        Date of birth
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${errors?.dob?.message
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                        id="in_dob_edit"
                                        placeholder={dob}
                                        {...register("dob")}
                                    />
                                    <span className="invalid-feedback">
                                        {errors?.dob?.message}
                                    </span>
                                </div>
                                <div>
                                    <label htmlFor="in_gender_edit">
                                        Gender
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${errors?.gender?.message
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                        id="in_gender_edit"
                                        placeholder={gender}
                                        {...register("gender")}
                                    />
                                    <span className="invalid-feedback">
                                        {errors?.gender?.message}
                                    </span>
                                </div>
                                <div>
                                    <label htmlFor="in_mobile_edit">
                                        Mobile
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${errors?.mobile?.message
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                        id="in_mobile_edit"
                                        placeholder={mobile}
                                        {...register("mobile")}
                                    />
                                    <span className="invalid-feedback">
                                        {errors?.mobile?.message}
                                    </span>
                                </div>
                                <div>
                                    <label htmlFor="in_email_edit">Email</label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${errors?.email?.message
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                        id="in_email_edit"
                                        placeholder={email}
                                        {...register("email")}
                                    />
                                    <span className="invalid-feedback">
                                        {errors?.email?.message}
                                    </span>
                                </div>
                                <div>
                                    <label htmlFor="in_address_edit">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${errors?.address?.message
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                        id="in_address_edit"
                                        placeholder={address}
                                        {...register("address")}
                                    />
                                    <span className="invalid-feedback">
                                        {errors?.address?.message}
                                    </span>
                                </div>
                                <div>
                                    <label htmlFor="in_password_edit">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className={`form-control form-control-sm ${errors?.password?.message
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                        id="in_password_edit"
                                        placeholder={password}
                                        {...register("password")}
                                    />
                                    <span className="invalid-feedback">
                                        {errors?.password?.message}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group mt-3">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ marginLeft: "auto", display: "block" }}>
                        Update
                    </button>
                </div>
            </form >
        </div >
    );
}

export default ProfileEditForm;
