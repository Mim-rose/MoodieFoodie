import React, { useState, useEffect } from "react";

// ✅ Correct image imports
import test from "../assets/images/test.jpeg";
import soup from "../assets/images/soup.jpg";
import dinner from "../assets/images/dinner.jpg";

const carouselImages = [
  { src: soup, text: "🔥 Warm & Comforting Chicken Soup - Perfect for Any Occasion!" },
  { src: test, text: "🍽 Enjoy a hearty and satisfying lunch, made fresh!" },
  { src: dinner, text: "🌙 End your day with a delightful dinner from Moodie Foodie!" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Safe console logging
  useEffect(() => {
    console.log("currentIndex:", currentIndex);
    console.log("currentImage:", carouselImages[currentIndex]?.src);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 visible z-10" : "opacity-0 invisible z-0"
          }`}
        >
          <img
            src={image.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <p className="text-white text-2xl font-bold px-6 py-3 text-center rounded-md shadow-lg">
              {image.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
