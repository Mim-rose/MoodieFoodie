import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { LuLeafyGreen } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { dataContext } from '../context/UserProvider';

const Cards = ({ name, image, id, price, type }) => {
  const { cartItems, addToCart, toggleCart } = useContext(dataContext);

  const itemInCart = cartItems.find(item => item.id === id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  const handleAddToCart = () => {
    addToCart({ id, name, image, price, type });
    toggleCart();
  };

  return (
    <div className="w-full max-w-[260px] min-h-[320px] bg-[#eee5e5] p-4 rounded-md shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
      
      {/* ✅ Clickable Image & Link to ProductDetails */}
      <Link to={`/product/${id}`} className="block">
        <div className="w-full h-[220px] flex items-center justify-center overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-[260px] h-[220px] object-cover rounded-md hover:scale-110 transition-all duration-300"
          />
        </div>
      </Link>

      {/* ✅ Name */}
      <div className="text-lg font-bold text-center mt-2">{name}</div>

      {/* ✅ Price & Type */}
      <div className="flex justify-between items-center p-2">
        <div className="text-md font-bold text-red-600">Rs {price}/-</div>
        <div className="flex gap-2 items-center">
          {type === 'veg' ? <LuLeafyGreen className="text-green-700 w-6 h-6" /> : <TbMeat className="text-red-700 w-6 h-6" />}
          <span className="text-md font-bold">{type}</span>
        </div>
      </div>

      {/* ✅ Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="font-bold w-full p-2 rounded-md bg-red-700 text-white hover:bg-green-950 transition-all flex items-center justify-center gap-2"
      >
        <MdOutlineShoppingCart size={20} />
        {quantity > 0 ? `Added (${quantity})` : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Cards;