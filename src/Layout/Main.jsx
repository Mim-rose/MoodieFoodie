import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';
import CartDrawer from '../pages/CartDrawer';

const Main = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Navbar - Full Width */}
      <Navbar />
      
      {/* Cart Drawer (non-fixed) */}
      <CartDrawer />
      
      {/* Main Content - Centered with max-width */}
      <div className="pt-[80px]">
        <div className="max-w-screen-xl mx-auto px-4">
          <Outlet />
        </div>
      </div>
      
      {/* Full-width Footer */}
      <Footer />
    </div>
  );
};

export default Main;