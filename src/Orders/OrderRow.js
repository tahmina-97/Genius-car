import React from 'react';

const OrderRow = ({ order }) => {
    const { serviceName, price, service_id } = order
    return (
        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
            <td className="p-3">
                <div className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#444444" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
            </td>
            <td className="p-3">
                <p>{serviceName}</p>
            </td>
            <td className="p-3">
                <p>{price}</p>
            </td>
            <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="dark:text-gray-400">Friday</p>
            </td>

            <td className="p-3 text-right">
                <p>$98,218</p>
            </td>
            <td className="p-3 text-right">
                <span className="font-semibold rounded-md">
                    <button className="block w-full py-2 px-5 text-center btn bg-orange-clr border-0 
                    hover:bg-orange-600 rounded-lg dark:text-gray-900 dark:bg-violet-400">Pending</button>
                </span>
            </td>
        </tr>



    );
};

export default OrderRow;



