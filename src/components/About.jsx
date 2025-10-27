import React from "react";
import { FaTruck, FaLeaf, FaUtensils, FaHeartbeat } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="bg-gray-50 py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">
          Why Choose <span className="text-gray-800">Moodie</span><span className="text-red-600">Foodie</span>?
        </h2>
        <p className="text-lg text-gray-600 mt-2 font-semibold">
          Where your cravings meet care, and every bite tells a story.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Card 1: Fast Delivery */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <FaTruck className="text-5xl mx-auto text-amber-500" />
          <h3 className="text-2xl font-semibold mt-4 text-gray-800">Swift Delivery</h3>
          <p className="text-gray-600 mt-2">Hot, fresh, and fast — your order arrives just when you need it.</p>
        </div>

        {/* Card 2: Fresh Ingredients */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <FaLeaf className="text-5xl mx-auto text-green-700" />
          <h3 className="text-2xl font-semibold mt-4 text-gray-800">Farm-Fresh Goodness</h3>
          <p className="text-gray-600 mt-2">We source locally and seasonally to bring you the best nature offers.</p>
        </div>

        {/* Card 3: High Nutrition */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <FaHeartbeat className="text-5xl mx-auto text-red-700" />
          <h3 className="text-2xl font-semibold mt-4 text-gray-800">Wholesome & Nourishing</h3>
          <p className="text-gray-600 mt-2">Balanced meals crafted to fuel your body and delight your taste buds.</p>
        </div>

        {/* Card 4: Best Taste */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <FaUtensils className="text-5xl mx-auto text-zinc-500" />
          <h3 className="text-2xl font-semibold mt-4 text-gray-800">Irresistible Flavor</h3>
          <p className="text-gray-600 mt-2">Every dish is a celebration — bold, authentic, and unforgettable.</p>
        </div>
      </div>
    </div>
  );
};

export default About;