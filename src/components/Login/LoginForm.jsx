import React from "react";

function LoginForm(props) {
    return (
        <form style={{ maxWidth: "400px", width: "100%" }}>
            <div class="form-group">
                <label for="in_email">Email address</label>
                <input
                    type="email"
                    class="form-control"
                    id="in_email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                />
            </div>
            <div class="form-group">
                <label for="in_password">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="in_password"
                    placeholder="Password"
                />
            </div>
            <button type="submit" class="btn btn-primary mt-2">
                Submit
            </button>
        </form>
    );
}

export default LoginForm;
