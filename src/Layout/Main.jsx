import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';
import Random from '../pages/Random';
import CartDrawer from '../pages/CartDrawer';


const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">  // ✅ wrap app
       <Navbar />
       <CartDrawer></CartDrawer>
       
       <div className="flex-grow">
         <Outlet />
       </div>

       <Footer className="mt-auto" />
    </div>
  )
}

export default Main;