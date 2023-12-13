const inputEmail = (payload) => {
    return {
        type: "login/inputemail",
        payload: payload,
    };
};

const inputPassword = (payload) => {
    return {
        type: "login/inputpwd",
        payload: payload,
    };
};

export { inputEmail, inputPassword }