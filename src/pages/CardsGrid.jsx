import React from 'react';
import Cards from './Cards'; // Adjust path if needed

const CardsGrid = ({ items }) => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <Cards key={item._id} item={item} />
      ))}
    </div>
  );
};

export default CardsGrid;