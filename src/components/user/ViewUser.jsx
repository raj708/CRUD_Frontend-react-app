import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ViewUser() {
    const { id } = useParams();
    const [users, setUsers] = useState({
        name: "",
        email: ""
    })
    useEffect(() => {
        userLoader();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const userLoader = async () => {
        const result = await axios.get(`http://localhost:9099/api/v1/user/${id}`)
        setUsers(result.data);
    }
    return (
        <div className="container mt-3">
            <div className="card col-md-6 offset-md-3">
                <div className="card">
                    <h2 className="text-center">User Details</h2>
                    <div className="card-body shadow">
                        <ul className="list-group">
                            <li className="list-group-item"><b>Id: </b>{users.id}</li>
                            <li className="list-group-item"><b>Name: </b>{users.name}</li>
                            <li className="list-group-item"><b>Email: </b>{users.email}</li>
                        </ul>
                        <div className="col-3 mx-auto mt-3">
                            <Link type="button" className="btn btn-primary" to={"/"}>Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewUser;