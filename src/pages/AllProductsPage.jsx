import React, { useState } from 'react';
import Cards from './Cards';
import Pagination from './Pagination';
import foodItems from '../Data/food_items.json';

const AllProductsPage = () => {
  const itemsPerPage = 30;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(foodItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = foodItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentItems.map(item => (
          <Cards key={item._id} item={item} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
};

export default AllProductsPage;