import React from 'react';
import DashboardSidebar from '../userDashboard/DashboardSidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      {/* Add padding-top to offset fixed navbar height */}
      <div className="flex min-h-screen bg-gray-100 pt-[72px]">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;