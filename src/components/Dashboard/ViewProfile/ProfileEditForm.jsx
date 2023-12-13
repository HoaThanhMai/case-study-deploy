import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import myProfileInfoSlice, {
    fetchMyProfileThunkAction,
    setMyProfileThunkAction,
} from "../../../slices/myProfileInfoSlice";
import { URL_API_GET_MEMBER } from "../../../services/common";

function ProfileEditForm(props) {
    const loginInfo = useSelector((state) => state.loginInfoReducer);
    const { status, user_inf } = loginInfo;

    const dispatch = useDispatch();

    useEffect(() => {
        let url = `${URL_API_GET_MEMBER}/${user_inf.id}`;
        dispatch(fetchMyProfileThunkAction(url));
    }, [dispatch]);

    const myProfile = useSelector((state) => state.myProfileReducer);

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
    } = myProfile.profile.myProfile;

    const isLoading = myProfile.status;
    console.log(myProfile.profile.editProfile);

    const handleFirstNameInputed = (e) => {
        dispatch(myProfileInfoSlice.actions.editFirstName(e.target.value));
    };

    const handleLastNameInputed = (e) => {
        dispatch(myProfileInfoSlice.actions.editLastName(e.target.value));
    };

    const handleDoBInputed = (e) => {
        dispatch(myProfileInfoSlice.actions.editDateOfBirth(e.target.value));
    };

    const handleGenderIputed = (e) => {
        dispatch(myProfileInfoSlice.actions.editGender(e.target.value));
    };

    const handleMobileInputed = (e) => {
        dispatch(myProfileInfoSlice.actions.editMobile(e.target.value));
    };

    const handleAddressInputed = (e) => {
        dispatch(myProfileInfoSlice.actions.editAddress(e.target.value));
    };

    const handlePasswdInputed = (e) => {
        dispatch(myProfileInfoSlice.actions.editPasswd(e.target.value));
    };

    const handleUpdateProfile = () => {
        let url = `${URL_API_GET_MEMBER}/${user_inf.id}`;
        console.log({ ...myProfile.profile.editProfile });
        dispatch(
            setMyProfileThunkAction(url, { ...myProfile.profile.editProfile })
        );
    };

    return isLoading === "loading" ? (
        <p> Loadiing....</p>
    ) : (
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
                            onInput={handleFirstNameInputed}
                        />
                    </div>
                    <div className="flex-grow-1">
                        <label htmlFor="in_last_name_edit">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="in_last_name_edit"
                            placeholder={last_name}
                            onInput={handleLastNameInputed}
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
                        onInput={handleDoBInputed}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="in_gender_edit">Gender</label>
                    <input
                        type="text"
                        className="form-control"
                        id="in_gender_edit"
                        placeholder={gender}
                        onInput={handleGenderIputed}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="in_mobile_edit">Mobile</label>
                    <input
                        type="text"
                        className="form-control"
                        id="in_mobile_edit"
                        placeholder={mobile}
                        onInput={handleMobileInputed}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="in_address_edit">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="in_address_edit"
                        placeholder={address}
                        onInput={handleAddressInputed}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="in_password_edit">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="in_password_edit"
                        placeholder={password}
                        onInput={handlePasswdInputed}
                    />
                </div>
                <div className="form-group mt-3">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleUpdateProfile}>
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProfileEditForm;
