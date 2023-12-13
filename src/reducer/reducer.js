const initState = {
    email: "",
    passwd: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "login/inputemail":
            return {
                ...state,
                email: action.payload,
            };
        case "login/inputpwd":
            return {
                ...state,
                passwd: action.payload,
            };
        case "login/submit":
            break;
        default:
            break;
    }
};

export { initState, reducer }