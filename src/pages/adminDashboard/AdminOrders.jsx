import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  

  useEffect(() => {
       axios.get(`${API_URL}/admin/orders`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  }
})

      .then(res => setOrders(res.data))
      .catch(err => console.error('Error fetching orders:', err));
  }, []);

  const getStatusBadge = (status) => {
    const base = "px-3 py-1 rounded-full text-xs font-semibold";
    switch (status) {
      case "pending":
        return <span className={`${base} bg-yellow-100 text-yellow-700`}>Pending</span>;
      case "confirmed":
        return <span className={`${base} bg-blue-100 text-blue-700`}>Confirmed</span>;
      case "completed":
        return <span className={`${base} bg-green-100 text-green-700`}>Completed</span>;
      default:
        return <span className={`${base} bg-gray-100 text-gray-600`}>{status || "Unknown"}</span>;
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📦 Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">User</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Items</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Total</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {orders.map(order => (
              <tr key={order._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-800">
                  {order.userName || "Unknown"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {Array.isArray(order.items)
                    ? order.items.map(i => i.name || i.food_name).join(', ')
                    : "No items"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  ${order.total?.toFixed(2) || "0.00"}
                </td>
                <td className="px-6 py-4 text-sm">
                  {getStatusBadge(order.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;