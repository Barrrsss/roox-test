import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface UserParams {
    user: any;
}

const ProtectedRoute = ({user}: UserParams) => {
    return user.id!==undefined ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
