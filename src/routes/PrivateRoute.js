import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className='text-center'>
                <div
                    className="mx-auto spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-orange-clr" role="status">
                    <span class="hidden">Loading...</span>
                </div>
            </div>
        );
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;