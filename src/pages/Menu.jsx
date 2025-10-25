// src/pages/Menu.jsx
import React, { useEffect, useState } from 'react';
import MenuItem from '../components/MenuItem';
import { Link } from 'react-router-dom';
import foodItems from '../Data/food_items.json'; // ✅ Direct import

const Menu = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    const filtered = foodItems.filter(item => item.tags.includes('popular'));
    setPopularItems(filtered.slice(0, 10));
  }, []);

  return (
    <div className="px-4 lg:px-20 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 animate-fade-in">
          Our Most Popular Dishes
        </h2>
        <p className="text-md font-medium text-gray-500 mt-2">
          Platter that will fix your mood...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2 gap-8">
        {popularItems.map(item => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/popular"
          className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full hover:scale-105 transition-transform"
        >
          See All Popular Dishes
        </Link>
      </div>
    </div>
  );
};

export default Menu;