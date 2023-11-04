import axios from "axios";
import React, { useState, useEffect } from 'react'
import { Link} from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loderUser();
    }, [])

    const loderUser = async () => {
        const result = await axios.get('http://localhost:9099/api/v1/user')
        setUsers(result.data);
    }
    const handleDeleteUser= async(id)=>{
        await axios.delete(`http://localhost:9099/api/v1/deleteUser/${id}`)
        loderUser();
    }

    return (
        <div className="container">
            <div className="py-4">
            <Link type="button" className="btn btn-primary my-2" to={'/addUser'}>Add User</Link>
                <table className="table table-striped table-hover border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((users, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{users.id}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>
                                    <Link type="button" className="btn btn-primary mx-1" to={`/viewUser/${users.id}`}>View</Link>
                                    <Link type="button" className="btn btn-success mx-1" to={`/editUser/${users.id}`}>Edit</Link>
                                    <button type="button" onClick={()=>handleDeleteUser(users.id)} className="btn btn-danger mx-1">Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </div>
    )
}
