import React from "react";
import { useSelector } from "react-redux";

function ProfileCard(props) {
    const loginInf = useSelector((state) => state.loginInfoReducer);

    const {
        id,
        avatar,
        first_name,
        last_name,
        role,
        dob,
        email,
        mobile,
        address,
        gender,
    } = loginInf.user_inf;

    return (
        <div className="card mb-3 border-0">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img
                        src={avatar}
                        className="img-fluid rounded-start"
                        alt="..."
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            {first_name} {last_name}
                        </h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">ID: {id}</li>
                            <li className="list-group-item">DoB: {dob}</li>
                            <li className="list-group-item">
                                Gender: {gender}
                            </li>
                            <li className="list-group-item">Email: {email}</li>
                            <li className="list-group-item">
                                Mobile: {mobile}
                            </li>
                            <li className="list-group-item">
                                Adress: {address}
                            </li>
                            <li className="list-group-item">Role: {role}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
