import React from "react";
import { useSelector } from "react-redux";

function ProfileEditForm(props) {
    const loginInf = useSelector((state) => state.loginInfoReducer);

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
    } = loginInf.user_inf;

    return (
        <div className="d-flex align-items-center justify-content-center row g-0">
            <form
                style={{ maxWidth: "400px", width: "100%" }}
                className="col-md-2">
                <div className="form-group d-flex">
                    <div className="col-md-6 me-2">
                        <label htmlFor="in_first_name_edit">Fist Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="in_first_name_edit"
                            placeholder={first_name}
                        />
                    </div>
                    <div className="flex-grow-1">
                        <label htmlFor="in_last_name_edit">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="in_last_name_edit"
                            placeholder={last_name}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="in_dob_edit">Date of birth</label>
                    <input
                        type="text"
                        className="form-control"
                        id="in_dob_edit"
                        placeholder={dob}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="in_gender_edit">Gender</label>
                    <input
                        type="text"
                        className="form-control"
                        id="in_gender_edit"
                        placeholder={gender}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="in_mobile_edit">Mobile</label>
                    <input
                        type="text"
                        className="form-control"
                        id="in_mobile_edit"
                        placeholder={mobile}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="in_address_edit">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="in_address_edit"
                        placeholder={address}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="in_password_edit">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="in_password_edit"
                        placeholder={password}
                    />
                </div>
                <div className="form-group mt-3">
                    <button type="submit" className="btn btn-primary mx-2">
                        Save
                    </button>
                    <button type="button" className="btn btn-secondary mx-2">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProfileEditForm;
