import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import "./PrivateRoute.css";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);
    const location = useLocation();

    if (loading) {
        return <div id="spinner-div" className="d-none">
            <div id="loader-spinner" className="container">
            </div>
        </div>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
};

export default PrivateRoute;