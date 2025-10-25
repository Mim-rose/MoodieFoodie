import React from 'react';
import AdminSidebar from '../pages/adminDashboard/AdminSidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';

const AdminDashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen bg-gray-50 pt-[72px]">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;