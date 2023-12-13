import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginInfoSlice, {
    fetchUserInfoThunkAction,
} from "../../slices/loginInfoSlice";
import {
    PATH_DASHBOARD_VIEW_PROFILE,
    URL_API_GET_MEMBER,
} from "../../services/common";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginInfo = useSelector((state) => state.loginInfoReducer);
    const { status, user_inf } = loginInfo;

    useEffect(() => {
        if (status === "logged") {
            toast.success(`Login success!`, {
                autoClose: 1000,
            });
            navigate(PATH_DASHBOARD_VIEW_PROFILE);
        }
    }, [status, navigate]);

    const handleInputEmail = (e) => {
        dispatch(loginInfoSlice.actions.setEmail(e.target.value));
    };

    const handleInputPasswd = (e) => {
        dispatch(loginInfoSlice.actions.setPasswd(e.target.value));
    };

    const handleClickSubmit = () => {
        let url = `${URL_API_GET_MEMBER}?email=${user_inf.email}`;
        dispatch(fetchUserInfoThunkAction(url));
    };

    return status !== "logged" ? (
        <form style={{ maxWidth: "400px", width: "100%" }}>
            <div className="form-group">
                <label htmlFor="in_email">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="in_email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                    onInput={handleInputEmail}
                />
            </div>
            <div className="form-group">
                <label htmlFor="in_passwd">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="in_passwd"
                    placeholder="Password"
                    required
                    onInput={handleInputPasswd}
                />
            </div>
            <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={handleClickSubmit}>
                Submit
            </button>
        </form>
    ) : null;
}

export default LoginForm;
