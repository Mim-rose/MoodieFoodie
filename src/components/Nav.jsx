import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";
import { dataContext } from '../context/UserProvider';

const Nav = () => {
  const { input, setInput, cartItems, toggleCart } = useContext(dataContext);

  return (
    // ✅ 1. Navbar background changed to white with a subtle shadow
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 h-[80px] flex items-center px-6 lg:px-8 justify-between">
      
      {/* ✅ 2. Branding name styled to be professional and modern */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-12 h-12 bg-red-700 flex justify-center items-center rounded-md shadow-md">
          <IoFastFoodOutline className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-bold">
            <span className="text-gray-800">Moodie</span>
            <span className="text-red-600">Foodie</span>
        </span>
      </Link>

      {/* ✅ 3. Navigation links are now dark gray for visibility, with a red hover effect */}
      <div className="hidden md:flex gap-8 text-lg font-medium font-bold flex-1 justify-center text-gray-800 ">
        <Link to="/" className="hover:text-red-600 transition">Home</Link>
        <a href="#about" className="hover:text-red-600 transition">About</a>
        <Link to="/menu" className="hover:text-red-600 transition">Menu</Link>
      </div>

      {/* Search Bar: Icon color updated to match theme */}
      <form className="hidden lg:flex items-center bg-gray-100 px-4 rounded-md shadow-inner w-[20%] md:w-[25%] lg:w-[22%] h-10 mr-4">
        <FiSearch className="text-red-600 w-5 h-5" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none text-sm bg-transparent ml-2 text-gray-900"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      {/* ✅ 4. Right-side buttons and cart are UNCHANGED, keeping the red theme */}
      <div className="flex items-center gap-5 lg:gap-6">
        <Link to="/signup" className="hidden md:flex items-center gap-3 px-4 py-2 bg-red-600 rounded-md text-white text-sm hover:bg-red-700 transition">
          <FaUserPlus size={16} />
          Sign Up
        </Link>

        <Link to="/login" className="hidden md:flex items-center gap-3 px-4 py-2 bg-gray-700 rounded-md text-white text-sm hover:bg-gray-800 transition">
          <FaSignInAlt size={16} />
          Login
        </Link>

        <div
          className="relative cursor-pointer w-12 h-12 bg-red-700 flex justify-center items-center rounded-md shadow-md"
          onClick={toggleCart}
        >
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-white text-red-700 font-bold px-2 py-1 rounded-full text-xs">
              {cartItems.length}
            </span>
          )}
          <MdOutlineShoppingCart className="text-white w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;