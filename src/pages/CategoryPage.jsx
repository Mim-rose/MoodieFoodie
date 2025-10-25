import React from 'react';
import { useParams } from 'react-router-dom';
import foodItems from "../Data/food_items.json";
import Cards from './Cards';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const filteredItems = foodItems.filter(
    item => item.food_category.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <div className="px-6  pt-24 pb-10">
      <h2 className="text-3xl text-center font-bold mb-6 capitalize text-orange-600">
        {categoryName?.replace(/_/g, ' ') || 'Category'}
      </h2>
      
      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No items found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;