import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

// React Icons
import { FaUserCircle, FaShoppingCart, FaHistory, FaTicketAlt, FaSignOutAlt } from "react-icons/fa";

const DashboardSidebar = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logOut();
    }
  };

  // A helper function to style active vs inactive links
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 hover:text-blue-500 transition ${
      isActive ? "font-bold text-blue-600" : "text-gray-700"
    }`;

  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">My Account</h2>
      <nav className="flex flex-col gap-4">
        <NavLink to="/dashboard/profile" className={linkClasses}>
          <FaUserCircle className="text-lg" />
          View Profile
        </NavLink>

        <NavLink to="/dashboard/cart" className={linkClasses}>
          <FaShoppingCart className="text-lg" />
          My Cart
        </NavLink>

        <NavLink to="/dashboard/orders" className={linkClasses}>
          <FaHistory className="text-lg" />
          Order History
        </NavLink>

        <NavLink to="/dashboard/coupons" className={linkClasses}>
          <FaTicketAlt className="text-lg" />
          Coupons
        </NavLink>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-600 hover:text-red-800 text-left"
        >
          <FaSignOutAlt className="text-lg" />
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
