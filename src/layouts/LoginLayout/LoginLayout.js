import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderPro from '../../Pages/Shared/HeaderPro/HeaderPro';


const LoginLayout = () => {
    return (
        <div>
            <HeaderPro></HeaderPro>
            <div className='max-w-6xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default LoginLayout;