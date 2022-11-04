import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../contexts/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            }
            )
            .then(data => setOrders(data?.data))
            .catch(error => console.error(error))
    }, [user?.email, logOut]);

    const handleDelete = id => {
        const proceed = window.confirm(`Are you sure to remove from cart?`);
        console.log(proceed);
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`,
                {
                    method: 'DELETE',
                }
            )
                .then(res => res.json())
                // .then(data => console.log(data))
                .then(data => {
                    if (data.success) {
                        alert(data.message);
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining)
                    }
                    else {
                        alert(data.error);
                    }
                })
                .catch(error => console.error(error))
        }

    }

    const handleStatusUpdate = id => {
        const proceed = window.confirm("Are you sure, you want to approve the order?")
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'Approved' })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        const remaining = orders.filter(odr => odr._id !== id)
                        const approving = orders.find(odr => odr._id === id)
                        approving.status = 'Approved'
                        const newOrders = [approving, ...remaining];
                        setOrders(newOrders);
                    }
                    else {
                        alert(data.error);
                    }
                })
                .catch(error => console.error(error))
        }
    }


    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-md font-semibold">
                        <colgroup>
                            <col />
                            <col className='w-44' />
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
                                    handleDelete={handleDelete}
                                    handleStatusUpdate={handleStatusUpdate}
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