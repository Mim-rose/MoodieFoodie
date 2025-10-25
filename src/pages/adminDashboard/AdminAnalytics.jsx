import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const API_URL = import.meta.env.VITE_API_URL;

const AdminAnalytics = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0
  });

  useEffect(() => {
    axios.get(`${API_URL}/admin/analytics`)
      .then(res => setStats(res.data))
      .catch(err => console.error('Error fetching analytics:', err));
  }, []);

  const barData = [
    { name: 'Users', value: stats.totalUsers },
    { name: 'Orders', value: stats.totalOrders }
  ];

  const pieData = [
    { name: 'Revenue', value: stats.totalRevenue },
    { name: 'Other', value: 10000 } // Placeholder for contrast
  ];

  const COLORS = ['#34d399', '#f87171'];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">📊 Admin Analytics</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold text-gray-600">Total Users</h3>
          <p className="text-2xl font-bold text-blue-600">{stats.totalUsers}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold text-gray-600">Total Orders</h3>
          <p className="text-2xl font-bold text-green-600">{stats.totalOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold text-gray-600">Total Revenue</h3>
          <p className="text-2xl font-bold text-amber-600">₹{stats.totalRevenue}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">User & Order Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Revenue Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;