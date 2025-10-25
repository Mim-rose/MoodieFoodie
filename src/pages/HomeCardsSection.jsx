import React from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import foodItems from '../Data/food_items.json';

const HomeCardsSection = () => {
  const previewItems = foodItems
    .filter(item => item.tags?.includes('popular'))
    .slice(0, 18);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 animate-fade-in text-center mb-6">Popular Picks</h2>

      {/* ✅ Responsive Grid with Consistent Spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {previewItems.map(item => (
          <Cards key={item._id} item={item} />
        ))}
      </div>

      {/* ✅ See More Button */}
      <div className="text-center mt-8">
        <Link
          to="/products"
          className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full hover:opacity-90"
        >
          See More
        </Link>
      </div>
    </section>
  );
};

export default HomeCardsSection;