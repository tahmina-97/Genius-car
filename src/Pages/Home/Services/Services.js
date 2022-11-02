import React, { useEffect, useState } from 'react';

import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data.data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='mb-16'>
            <div className='text-center w-2/3 mx-auto'>
                <p className='text-xl  font-inter text-orange-clr font-bold mb-3'>Services</p>
                <h1 className="text-5xl font-bold text-black-bg font-inter">Our Service Area
                </h1>
                <p className="mt-6 mb-8 text-gray-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}>

                    </ServiceCard>

                    )
                }
            </div>

        </div>
    );
};

export default Services;