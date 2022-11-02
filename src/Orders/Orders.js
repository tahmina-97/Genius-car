import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../contexts/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data.data))
    }, [user?.email]);


    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <tbody>
                            {orders.map(order =>
                                <OrderRow
                                    key={order._id}
                                    order={order}
                                ></OrderRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>




        </div>
    );
};

export default Orders;