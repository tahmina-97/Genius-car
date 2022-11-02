import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData().data;
    const { id, title, price } = service;
    return (
        <div className='bg-gray-bg mb-32'>
            <form className="">
                <fieldset className="p-12 md:p-24  rounded-md shadow-sm dark:bg-gray-900">
                    <div className="grid grid-cols-6 gap-6 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <input id="" type="text" placeholder="First Name" className="text-sm w-full h-14 p-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <input id="" type="text" placeholder="Last Name" className="text-sm w-full h-14 p-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <input id="" type="number" placeholder="Your Phone" className="text-sm w-full h-14 p-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <input id="" type="email" placeholder="Your Email" className="text-sm w-full h-14 p-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                        </div>


                        <div className="col-span-full">
                            <textarea id="message" placeholder="Your Message" className="text-sm px-5 py-6 w-full h-60 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
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