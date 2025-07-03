import React from "react";
import { FaTruck, FaLeaf, FaUtensils, FaHeartbeat } from "react-icons/fa";

const About = () => {
  return (
    // ✅ 1. Main background is now light gray for a clean look
    <div id="about" className="bg-gray-50 py-20 px-6">
      
      {/* ✅ 2. Section header styled to match the navbar branding */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">
          Why Choose <span className="text-gray-800">Moodie</span><span className="text-red-600">Foodie</span>?
        </h2>
        <p className="text-lg text-gray-600 mt-2 font-semibold">Delivering excellence, one bite at a time.</p>
      </div>

      {/* ✅ Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        
        {/* ✅ 3. All cards are now white, with dark text and consistent red icons */}
        
        {/* Card 1: Fast Delivery */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <FaTruck className="text-5xl mx-auto text-amber-500" />
          <h3 className="text-2xl font-semibold mt-4 text-gray-800">Lightning Fast Delivery</h3>
          <p className="text-gray-600 mt-2">Your food, at your doorstep in no time. Speed meets satisfaction.</p>
        </div>

        {/* Card 2: Fresh Ingredients */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <FaLeaf className="text-5xl mx-auto text-green-700" />
          <h3 className="text-2xl font-semibold mt-4 text-gray-800">Only Fresh Ingredients</h3>
          <p className="text-gray-600 mt-2">Handpicked, farm-fresh, and full of flavor—because quality matters.</p>
        </div>

        {/* Card 3: High Nutrition */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <FaHeartbeat className="text-5xl mx-auto text-red-700" />
          <h3 className="text-2xl font-semibold mt-4 text-gray-800">High Nutritional Value</h3>
          <p className="text-gray-600 mt-2">Fueling your body with premium nutrition for a healthier lifestyle.</p>
        </div>

        {/* Card 4: Best Taste */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <FaUtensils className="text-5xl mx-auto text-zinc-500" />
          <h3 className="text-2xl font-semibold mt-4 text-gray-800">Unmatched Taste</h3>
          <p className="text-gray-600 mt-2">Crafted by expert chefs for an unforgettable food experience.</p>
        </div>
        
      </div>
    </div>
  );
};

export default About;