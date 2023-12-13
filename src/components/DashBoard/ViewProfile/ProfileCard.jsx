import React from "react";

function ProfileCard(props) {
    return (
        <div class="card mb-3 border-0">
            <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
                        class="img-fluid rounded-start"
                        alt="..."
                    />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">User Name</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: </li>
                            <li class="list-group-item">Name: </li>
                            <li class="list-group-item">Email: </li>
                            <li class="list-group-item">Mobile: </li>
                            <li class="list-group-item">Adress: </li>
                            <li class="list-group-item">CPA: </li>
                            <li class="list-group-item">Status: </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
