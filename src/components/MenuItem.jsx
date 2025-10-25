import React from 'react';

const MenuItem = ({ item }) => {
  const { food_name, description, food_image, price } = item;

  return (
    <div className="flex gap-4 items-center border-b pb-4 mb-4">
      <img
        src={food_image}
        alt={food_name}
         className="w-24 h-24 object-cover"
  style={{ borderRadius: '0 280px 280px 280px' }}

      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{food_name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="text-right font-bold text-orange-500">${price.toFixed(2)}</div>
    </div>
  );
};

export default MenuItem;