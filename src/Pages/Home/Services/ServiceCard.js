import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card card-compact rounded-xl bg-white border-2 border-light-text">
            <div className='p-6'>
                <figure><img className='h-52 w-full rounded-md' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-inter">{title}</h2>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-inter font-semibold text-orange-clr'>Price : ${price}</p>
                        <Link to={`/checkout/${_id}`}>
                            <BsArrowRight className='text-orange-clr text-xl'></BsArrowRight>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;