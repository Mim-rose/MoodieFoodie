import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const API_URL = import.meta.env.VITE_API_URL;

const OrderHistory = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/orders/${user.uid}`)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [user]);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Order History</h2>
      {orders.length === 0 ? <p>No orders found.</p> : (
        <ul className="space-y-4">
          {orders.map(order => (
            <li key={order._id} className="border p-4 rounded">
              <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
              <ul className="mt-2">
                {order.items.map(item => (
                  <li key={item._id}>{item.food_name} × {item.quantity}</li>
                ))}
              </ul>
              <p className="mt-2 font-bold">Total: ৳{order.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;