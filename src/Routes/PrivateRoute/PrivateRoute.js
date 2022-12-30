import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Spinner from '../../Components/Shared/Spinner/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';




const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    console.log(loading)
    if(loading){
        return  <Spinner></Spinner>
    }

    if (user && user.uid){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;