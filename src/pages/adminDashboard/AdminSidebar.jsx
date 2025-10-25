import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaClipboardList, FaTags, FaBoxOpen, FaChartBar } from 'react-icons/fa';

const linkClasses = ({ isActive }) =>
  `flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-100 ${
    isActive ? 'bg-blue-200 font-bold' : 'text-gray-700'
  }`;

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <NavLink to="/admin/users" className={linkClasses}>
          <FaUsers /> Users
        </NavLink>
        <NavLink to="/admin/orders" className={linkClasses}>
          <FaClipboardList /> Orders
        </NavLink>
        <NavLink to="/admin/coupons" className={linkClasses}>
          <FaTags /> Coupons
        </NavLink>
        <NavLink to="/admin/inventory" className={linkClasses}>
          <FaBoxOpen /> Inventory
        </NavLink>
        <NavLink to="/admin/analytics" className={linkClasses}>
          <FaChartBar /> Analytics
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;