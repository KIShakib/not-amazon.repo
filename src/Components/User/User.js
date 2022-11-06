import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import "./User.module.css";

const User = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="card w-96 glass p-5 mx-auto mt-20">
            <figure><img className='rounded' src={user?.photoURL} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title font-extrabold">{user?.displayName}</h2>
                <p>{user?.email}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">My Profile</button>
                </div>
            </div>
        </div>
    );
};

export default User;