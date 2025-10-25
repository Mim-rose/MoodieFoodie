import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6"
import { FaRegClock } from "react-icons/fa6";
import Navbar from "./Shared/Navbar";
import { MdOutlineShoppingCart } from "react-icons/md";
import Footer from "./Shared/Footer";
import CartDrawer from "./CartDrawer";
import Cards from "./Cards";
import food_items from "../Data/food_items.json"

const ProductDetails = () => {
  const { id } = useParams();
  const product = food_items.find((item) => item._id === (id));

  // 🔧 Placeholder cart functions (replace with context later)
  const addToCart = () => console.log("Add to cart:", product);
  const toggleCart = () => console.log("Toggle cart drawer");

  const [selectedDelivery, setSelectedDelivery] = useState(null);

  if (!product) {
    return <p className="text-xl text-gray-600 text-center mt-10">Product not found</p>;
  }

  const relatedProducts = food_items
    .filter((item) => item.food_category === product.food_category && item._id !== product._id)
    .slice(0, 4);

  return (
    <div className="relative">
      <Navbar />

      {/* 🖼️ Product Layout */}
      <div className="mt-[100px] w-full flex flex-col md:flex-row p-6 items-start justify-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.food_image}
            alt={product.food_name}
            className="w-[450px] h-auto object-cover rounded-lg hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">{product.food_name}</h2>
          <p className="text-lg text-gray-600 mb-2">Category: {product.food_category}</p>

          <div className="flex items-center gap-6 mt-3">
            <span className="text-2xl font-bold text-orange-600">Rs {product.price}/-</span>
            <button
              className="flex items-center gap-2 text-white bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 px-5 py-3 rounded-md hover:brightness-110 transition-all"
              onClick={() => {
                addToCart(product);
                toggleCart();
              }}
            >
              <MdOutlineShoppingCart size={22} />
              Add to Cart
            </button>
          </div>

          <div className="mt-4">
            <span
              className={`px-4 py-2 rounded-md text-white font-semibold ${
                product.food_type === "veg" ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {product.food_type === "veg" ? "Vegetarian" : "Non-Vegetarian"}
            </span>
          </div>

          <details className="mt-6 border p-4 rounded-md">
            <summary className="cursor-pointer text-lg font-bold">Ingredients</summary>
            <p className="text-gray-700 mt-2">Details coming soon...</p>
          </details>

          <details className="mt-4 border p-4 rounded-md">
            <summary className="cursor-pointer text-lg font-bold">Allergen Information</summary>
            <p className="text-gray-700 mt-2">Details coming soon...</p>
          </details>
        </div>
      </div>

      {/* 🚚 Delivery Options */}
      <div className="mt-12 px-6 text-center">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Select Delivery Option</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {[
            { type: "Standard Delivery", time: "2 to 4 Days", icon: FaRegClock, color: "bg-gray-100" },
            { type: "Express Delivery", time: "24 Hours", icon: FaRegClock, color: "bg-orange-100" },
            { type: "Same-Day Delivery", time: "Available for select locations", icon: FaRegClock, color: "bg-amber-100" },
          ].map((option, index) => (
            <div
              key={index}
              className={`p-5 rounded-md flex flex-col items-center justify-center cursor-pointer shadow-md transition-all ${
                selectedDelivery === option.type ? "border-2 border-orange-600" : "border border-gray-300"
              } ${option.color}`}
              onClick={() => setSelectedDelivery(option.type)}
            >
              <option.icon className="text-orange-600 w-6 h-6 mb-2" />
              <span className="font-semibold text-lg">{option.type}</span>
              <p className="text-sm text-gray-700">{option.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ⭐ Reviews */}
      <div className="mt-12 px-6 text-center">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Customer Reviews</h3>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            { name: "John Doe", rating: 5, comment: "Absolutely delicious! Highly recommended." },
            { name: "Sarah Lee", rating: 4, comment: "Tasty and fresh, but could be a bit spicier." },
            { name: "Mark Benson", rating: 5, comment: "Loved it! Will definitely order again." },
          ].map((review, index) => (
            <div key={index} className="border p-5 rounded-md shadow-md">
              <div className="flex items-center gap-2 justify-center">
                <FaStar className="text-yellow-500 w-5 h-5" />
                <span className="font-bold text-lg">{review.name}</span>
              </div>
              <p className="mt-3 text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🍽️ Related Products */}
      <div className="mt-12 px-6 text-center">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 px-4 sm:px-6 lg:px-10 py-4 mx-auto max-w-7xl">
          {relatedProducts.map((item) => (
            <Cards
              key={item._id}
              item={item}
              />
          ))}
        </div>
      </div>

      
      <CartDrawer />
    </div>
  );
};

export default ProductDetails;