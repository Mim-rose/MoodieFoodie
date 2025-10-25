import React from 'react';
import Cover from './Cover';
import image1 from "../assets/home/image1.avif";
import useMenu from './hooks/useMenu';
import SectionTitle from '../components/SectionTitle';
import MenuCategory from './MenuCategory';
import soup1 from '../assets/home/soup.jpg';



const NavMenu = () => {
  const [menu, loading] = useMenu();

  const dessert = menu.filter(item => item.food_category === 'dessert');
  const pizza = menu.filter(item => item.food_category === 'pizza');
  const salad = menu.filter(item => item.food_category === 'salad');
  const soups = menu.filter(item => item.food_category === 'soups');
  const burger = menu.filter(item => item.food_category === 'burger');

  return (
    <div>
      {/* 🍽️ Main Cover */}
      <Cover img={image1} title="Our Menu" />
      <SectionTitle title="Today's Offer" subtitle="Don't Miss" />
      <MenuCategory items={burger}  />

      {/* 🥣 Soups */}
      <Cover img={soup1} title="Soup Symphony" />
      <SectionTitle title="Best Soup" subtitle="Sip, Savor, Smile" />
      <MenuCategory items={soups}  />

      {/* 🍕 Pizza */}
      <Cover img="https://images.unsplash.com/photo-1751026044631-2aa676914b1b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmJxJTIwJTIwY2hpY2tlbiUyMHBpenphfGVufDB8fDB8fHww" title="Pizza Parade" />
      <SectionTitle title="Hot & Fresh" subtitle="Slice into Happiness" />
      <MenuCategory items={pizza} />

      {/* 🥗 Salad */}
         {/* 🥗 Salad */}
<Cover
  img="https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg"
  title="Garden Goodness"
/>
<SectionTitle title="Fresh Picks" subtitle="Crunchy, Colorful, Clean" />
<MenuCategory items={salad} />

      {/* 🍰 Dessert */}
      <Cover img="https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg" title="Sweet Finale" />
      <SectionTitle title="Dessert Delights" subtitle="Treat Yourself" />
      <MenuCategory items={dessert}  />
    </div>
  );
};

export default NavMenu;