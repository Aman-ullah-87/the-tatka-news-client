import React from 'react';
import NavigateBar from '../Pages/Shared/NavigateBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigateBar/>
            <Outlet/>
        </div>
    );
};

export default LoginLayout;