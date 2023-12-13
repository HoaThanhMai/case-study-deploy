import React from "react";

function ProfileEditForm(props) {
    return (
        <div className="d-flex align-items-center justify-content-center row g-0">
            <form
                style={{ maxWidth: "400px", width: "100%" }}
                className="col-md-2">
                <div className="form-group">
                    <label htmlFor="in_name_edit">Edit Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="in_name_edit"
                        placeholder=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="in_dob_edit">Edit date of birth</label>
                    <input
                        type="text"
                        className="form-control"
                        id="in_dob_edit"
                        placeholder=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="in_gender_edit">Edit gender</label>
                    <input
                        type="text"
                        className="form-control"
                        id="in_gender_edit"
                        placeholder=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="in_mobile_edit">Edit mobile</label>
                    <input
                        type="text"
                        className="form-control"
                        id="in_mobile_edit"
                        placeholder=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="in_address_edit">Edit address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="in_address_edit"
                        placeholder=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="in_password_edit">Edit address</label>
                    <input
                        type="password"
                        className="form-control"
                        id="in_password_edit"
                        placeholder=""
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
