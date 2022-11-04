import React, { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Checkout = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const service = useLoaderData().data;
    const { _id, title, price } = service;
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    if (loading) {
        return (
            <div className='text-center'>
                <div
                    className="mx-auto spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-orange-clr" role="status">
                    <span className="hidden">Loading...</span>
                </div>
            </div>
        );
    }

    const fullName = user?.displayName;
    const [firstName1, lastName1] = fullName?.split(' ');


    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;

        const name = `${firstName} ${lastName}`
        const phone = form.phone.value;
        const email = user?.email;
        const message = form.message.value;
        console.log(name, phone, email, message);

        const order = {
            service_id: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch(`https://genius-car-server-lovat.vercel.app/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert(data.message);
                    form.reset();
                }
            })
            .catch(err => console.error(err))

        navigate('/orders');
    }

    return (
        <div className='bg-gray-bg mb-32'>
            <form onSubmit={handlePlaceOrder}>
                <fieldset className="p-12 md:p-24  rounded-md shadow-sm dark:bg-gray-900">
                    <div className="grid grid-cols-6 gap-6 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <input id="" type="text" name='firstName' placeholder="First Name" className="text-sm w-full h-14 p-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" defaultValue={firstName1} required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <input id="" type="text" name='lastName' placeholder="Last Name" className="text-sm w-full h-14 p-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" defaultValue={lastName1} required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <input id="" type="number" name='phone' placeholder="Your Phone" className="text-sm w-full h-14 p-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <input id="" type="email" name='email' placeholder="Your Email" className="text-sm w-full h-14 p-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" defaultValue={user?.email} required />
                        </div>


                        <div className="col-span-full">
                            <textarea id="message" name='message' placeholder="Your Message" className="text-sm px-5 py-6 w-full h-60 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                        </div>

                        <div className="col-span-full">
                            <button className="block w-full p-3 text-center btn bg-orange-clr 
                            border-0 hover:bg-orange-600 rounded-md dark:text-gray-900 dark:bg-violet-400"> Order Confirm</button>
                        </div>

                    </div>
                </fieldset>
            </form>


        </div>
    );
};

export default Checkout;