import React, { useEffect, useState } from 'react';
import MenuItem from '../components/MenuItem';
import foodItems from '../Data/food_items.json'; // ✅ Direct import

const Popular = () => {
  const [allItems, setAllItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const popular = foodItems.filter(item => item.tags.includes('popular'));
    setAllItems(popular);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  return (
    <div className="px-4 lg:px-20 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-400 to-pink-500 animate-fade-in">
          All Popular Dishes
        </h2>
        <p className="text-md font-medium text-gray-500 mt-2">
          Explore the full range of crowd favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2 gap-8">
        {allItems.slice(0, visibleCount).map(item => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      {visibleCount < allItems.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-pink-500 text-white rounded-full hover:scale-105 transition-transform"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Popular;