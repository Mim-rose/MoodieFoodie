import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LuLeafyGreen } from 'react-icons/lu';
import { TbMeat } from 'react-icons/tb';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CartContext } from './CartProvider';
import { AuthContext } from '../providers/AuthProvider';

const Cards = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (!user) {
      alert("Please sign in to add items to your cart.");
      return;
    }
    addToCart(item);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[400px]">
      
      {/* Image & Title */}
      <Link to={`/products/${item._id}`} className="block group">
        <img
          src={item.food_image}
          alt={item.food_name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{item.food_name}</h3>
          <div className="flex gap-2 items-center">
            {item.food_type === 'veg' ? (
              <LuLeafyGreen className="text-green-700 w-5 h-5" />
            ) : (
              <TbMeat className="text-red-700 w-5 h-5" />
            )}
            <span className="text-sm font-semibold text-gray-700">{item.food_type}</span>
          </div>
        </div>
      </Link>

      {/* Price & See Details */}
      <div className="px-4 flex justify-between items-center">
        <span className="text-orange-600 font-bold text-md">Rs {item.price}/-</span>
        <Link to={`/products/${item._id}`}>
          <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm hover:opacity-90">
            See Details
          </button>
        </Link>
      </div>

      {/* Add to Cart */}
      <div className="px-4 pb-4 mt-2">
        <button
          onClick={handleAddToCart}
          className="font-bold w-full px-3 py-2 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 text-white hover:brightness-110 flex items-center justify-center gap-2 text-sm"
        >
          Add to Cart
          <MdOutlineShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
};

export default Cards;