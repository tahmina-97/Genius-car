import React from 'react';
import img from '../../assets/images/Error/error.svg'
import HeaderPro from '../Shared/HeaderPro/HeaderPro';

const ErrorElement = () => {
    return (
        <div>
            <HeaderPro></HeaderPro>
            <div className='w-full p-10'>
                <img className='mx-auto' src={img} alt="" />

            </div>

        </div>

    );
};

export default ErrorElement;