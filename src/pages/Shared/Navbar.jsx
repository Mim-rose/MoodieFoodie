
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { CartContext } from '../CartProvider';
import logo from '../../assets/logo.png';


const Navbar = () => {


     const navigate = useNavigate();


     const handleSearch = (e) => {
  e.preventDefault();
  if (input.trim()) {
    navigate(`/search?q=${encodeURIComponent(input.trim())}`);
    setInput('');
  }
};


   const {user, logOut} = useContext(AuthContext);
   const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error));
   }

  const [input, setInput] = useState('');
  const { cartItems, toggleCart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Main Container */}
      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between px-4 lg:px-8 py-3 gap-y-3">

        {/* Left: Branding + Menu Toggle */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Menu Icon for small & medium screens */}
          <button
            className="lg:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MdMenu />
          </button>

          {/* Branding */}
          <Link to="/" className="flex items-center gap-3">
            <div className='items-center justify-center' >
              <img
    src={logo} // or use an imported image
    alt="MoodieFoodie Logo"
    className="w-12 h-12 object-contain mb-4  "
  />

            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              MoodieFoodie
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links (Large Only) */}
        <div className="hidden lg:flex gap-8 text-lg font-semibold flex-1 justify-center text-gray-700">
          <Link to="/" className="hover:text-amber-500 transition">Home</Link>
          <a href="#about" className="hover:text-amber-500 transition">About</a>
          <Link to="/NavMenu" className="hover:text-amber-500 transition">Menu</Link>
          <Link to="/popular" className="hover:text-amber-500 transition">Popular</Link>
          <Link to="/products" className="hover:text-amber-500 transition">All Items</Link>
          <Link to="/order" className="hover:text-amber-500 transition"> Order   </Link>

        </div>

        {/* Right: Search + Auth + Cart */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
          {/* Search Bar */}
          <form onSubmit={handleSearch}  className="w-full sm:w-[40vw] max-w-[300px] flex items-center bg-gray-100 px-4 rounded-md shadow-inner h-10">
            <FiSearch className="text-amber-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none text-sm bg-transparent ml-2 text-gray-900"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </form>

          {/* Auth Buttons */}
          {!user && (
  <Link
    to="/signup"
    className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-amber-700 to-yellow-200 rounded-md text-white text-sm hover:scale-105 transition"
  >
    <FaUserPlus size={16} />
    <span className="hidden sm:inline">Sign Up</span>
  </Link>
)}
    
    {user ? (
  <div className="flex items-center gap-2">
    <Link to="/dashboard" className="flex items-center gap-2 hover:text-amber-600 transition">
      {user?.photoURL ? (
        <img
          src={user.photoURL}
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
          <FaUserCircle className="text-gray-600 text-xl" />
        </div>
      )}
      <span className="text-sm font-medium">{user.displayName || "User"}</span>
    </Link>

     {/* ✅ Add Admin Dashboard Link Here */}
    {user?.role === 'admin' && (
      <Link
        to="/admin"
        className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
      >
        Admin Dashboard
      </Link>
    )}


    <button
      onClick={handleLogOut}
      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
    >
      Log Out
    </button>
  </div>
) : (
  <Link
    to="/signin"
    className="flex items-center gap-2 px-3 py-2 bg-teal-800 rounded-md text-white text-sm hover:bg-gray-600 transition"
  >
    <FaSignInAlt size={16} />
    <span className="hidden sm:inline">Sign In</span>
  </Link>
)}
          
          

          {/* Cart */}
          <div
            className="relative cursor-pointer w-12 h-12 min-w-[48px] overflow-visible bg-gradient-to-tr from-yellow-400 via-red-500 to-amber-500 flex justify-center items-center rounded-md shadow-md"
            onClick={toggleCart}
          >
              {cartItems.length > 0 && (
  <span className="absolute -top-1 -right-2 bg-white text-pink-600 font-bold px-2 py-1 rounded-full text-xs">
    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
  </span>
)} 

            <MdOutlineShoppingCart className="text-white w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Mobile & Medium Dropdown Menu */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col gap-2 px-6 pb-4 bg-white shadow text-gray-800 font-medium text-lg">
          <Link to="/" className="hover:text-pink-500 transition">Home</Link>
          <a href="#about" className="hover:text-pink-500 transition">About</a>
          <Link to="/NavMenu" className="hover:text-pink-500 transition">Menu</Link>
          <Link to="/popular" className="hover:text-pink-500 transition">Popular</Link>
          <Link to="/products" className="hover:text-pink-500 transition">All Items</Link>
          <Link to="/order" className="hover:text-amber-500 transition"> Order   </Link>

        </ul>
      )}
    </nav>
  );
};

export default Navbar;

