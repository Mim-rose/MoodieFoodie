import React from 'react';
import MenuItem from '../components/MenuItem';
import Cover from './Cover';

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title} />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 py-8">
        {items.map(item => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;