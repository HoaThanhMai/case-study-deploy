import React, { useEffect, useReducer } from "react";
import { initState, reducer } from "../../reducer/reducer";
import { inputEmail, inputPassword } from "../../reducer/action";

function LoginForm(props) {
    const [state, dispatch] = useReducer(reducer, initState);

    console.log(state);

    const handleInputEmail = (e) => {
        dispatch(inputEmail(e.target.value));
    };
    const handleInputPassword = (e) => {
        dispatch(inputPassword(e.target.value));
    };

    const handleClickSubmit = () => {
        console.log("handleClickSubmit");
    };

    useEffect(() => {}, []);

    return (
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
                    onInput={handleInputPassword}
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary mt-2"
                onClick={handleClickSubmit}>
                Submit
            </button>
        </form>
    );
}

export default LoginForm;
