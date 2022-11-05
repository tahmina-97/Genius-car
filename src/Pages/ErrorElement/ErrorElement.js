import React from 'react';
import img from '../../assets/images/Error/error.svg'
import Header from '../Shared/Header/Header';
import HeaderPro from '../Shared/HeaderPro/HeaderPro';

const ErrorElement = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-full p-10'>
                <img className='mx-auto' src={img} alt="" />

            </div>

        </div>

    );
};

export default ErrorElement;