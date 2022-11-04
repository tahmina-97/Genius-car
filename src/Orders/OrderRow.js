import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {

    const { _id, serviceName, price, service_id, message, status } = order;
    const [orderService, setOrderService] = useState({});
    useEffect(() => {
        fetch(`https://genius-car-server-lovat.vercel.app/services/${service_id}`)
            .then(res => res.json())
            .then(data => setOrderService(data.data))
            .catch(error => console.error(error))
    }, [service_id])


    return (
        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
            <td className="p-3">
                <button onClick={() => handleDelete(_id)} className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#444444" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>
            </td>
            <td className="p-3 ">
                {
                    orderService?.img &&
                    <img className='h-16 w-16 md:h-36 md:w-36 rounded-lg ' src={orderService.img} alt="" />
                }
            </td>

            <td className="p-3 text-center ">
                <p>{serviceName}</p>
            </td>

            <td className="p-3">
                <p>{price}</p>
            </td>

            <td className="p-3">
                <p>{message}</p>

            </td>

            <td className="p-3 text-right">
                <span className="font-semibold rounded-md">
                    <button onClick={() => handleStatusUpdate(_id)} className="block w-full py-2 px-5 text-center btn bg-orange-clr border-0 
                    hover:bg-orange-600 rounded-lg dark:text-gray-900 dark:bg-violet-400">{status ? status : 'Pending'}</button>
                </span>
            </td>
        </tr>



    );
};

export default OrderRow;



