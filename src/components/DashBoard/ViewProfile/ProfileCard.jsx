import React from "react";

function ProfileCard(props) {
    // const [id, avatar, name, role, dob, email, mobile, address] = props;
    const id = "01HHHDAR52S3WJJR5JPSCRZBQB";
    const avatar =
        "https://robohash.org/eumfugitvoluptatem.png?size=100x100&set=set1";
    const first_name = "Olivie";
    const last_name = "Coulston";
    const role = "student";
    const dob = "12/9/2023";
    const email = "ocoulston0@squarespace.com";
    const mobile = "3231786487";
    const address = "9905 Rutledge Parkway";
    const gender = "female";

    return (
        <div className="card mb-3 border-0">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img
                        // src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
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
