import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 animate-fade-in">
        {title}
      </h2>
      <p className="mt-2 text-sm md:text-base text-gray-600 font-medium animate-fade-in delay-200">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;