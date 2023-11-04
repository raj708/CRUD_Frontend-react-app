import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {
    const{id}=useParams();
    const navigate =useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: ''
    })
    const { name, email } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    useEffect(() => {
      userLoader();
    
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    
    const onsubmit= async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:9099/api/v1/updateUser/${id}`,user);
        navigate('/')
    }
    const userLoader=async ()=>{
        const result=await axios.get(`http://localhost:9099/api/v1/user/${id}`)
        setUser(result.data)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User</h2>
                    <form onSubmit={onsubmit}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                id="Name"
                                onChange={onInputChange}
                            />
                            <label htmlFor="Email" className="form-label">
                                Email
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your Email"
                                name="email" id="Email"
                                value={email}
                                onChange={onInputChange}
                            />
                            <div className="mx-auto mt-3">
                                <button type="submit" className="btn btn-primary ">Submit</button>
                                <Link type="button" className="btn btn-dark mx-3" to={"/"}>Cancel</Link>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditUser;