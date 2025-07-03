import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Nav from '../components/Nav';
import Categories from '../category';
import Cards from '../components/Cards';
import CartDrawer from '../components/CartDrawer';
import Footer from '../components/Footer';
import { dataContext } from '../context/UserProvider';
import About from "../components/About";
import Reviews from "../components/Reviews";

const Home = () => {
  const { filteredItems, filterCategory, input } = useContext(dataContext);

  return (
    <div className="relative">
      {/* ✅ Navbar positioned at the top */}
      <Nav />

      {/* ✅ Adjusted spacing below navbar */}
      <div className="mt-[100px] w-full flex flex-wrap gap-3 p-6 justify-center mx-auto">
        {input.trim() === '' && Categories.map((catItem) => (
          <div key={catItem.id} className="flex justify-center items-center p-2">
            <div
              className="w-[110px] h-[110px] bg-[#F2F2F2] flex flex-col justify-center items-center gap-1 p-3 rounded-md text-lg font-semibold shadow-md hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => filterCategory(catItem.name)}
            >
              {catItem.icon}
              {catItem.name}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Divider for better structure */}
      <hr className="border-gray-300 my-6" />

      {/* ✅ Product Cards Grid with evenly distributed spacing */}
      <div className="mt-[37px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 px-4 sm:px-6 lg:px-10 py-8 container mx-auto">
        {filteredItems.length > 0 ? (
          filteredItems.map((foodItem) => (
            <Link to={`/product/${foodItem.id}`} key={foodItem.id} className="block">
              <Cards
                id={foodItem.id}
                name={foodItem.food_name}
                image={foodItem.food_image}
                price={foodItem.price}
                type={foodItem.food_type}
              />
            </Link>
          ))
        ) : (
          <p className="text-xl text-gray-600 mt-10">No items found</p>
        )}
      </div>

      {/* ✅ Cart Drawer for seamless interaction */}
      <CartDrawer />

      {/* ✅ Additional Sections */}
      <About />
      <Reviews />

      {/* ✅ Footer added for structured page layout */}
      <Footer />
    </div>
  );
};

export default Home;