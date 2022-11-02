import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderPro from '../../Pages/Shared/HeaderPro/HeaderPro';


const LoginLayout = () => {
    return (
        <div>
            <HeaderPro></HeaderPro>
            <Outlet></Outlet>

        </div >
    );
};

export default LoginLayout;