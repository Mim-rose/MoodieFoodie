import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

import test from "../assets/home/test.jpeg";
import soup from "../assets/home/soup.jpg";
import image16 from "../assets/home/image16.avif";
import image1 from "../assets/home/image1.avif";
import image5 from "../assets/home/image5.avif";
import image10 from "../assets/home/image10.avif";

const Banner = () => {
  const images = [
    { src: test, alt: "Delicious Dish", style: "top-0 left-[25%]" },
    { src: soup, alt: "Soup Bowl", style: "top-[9%] right-0" },
    { src: image1, alt: "Juicy Burger", style: "top-[32%] left-[-2%]" },
    { src: image5, alt: "Pasta Plate", style: "bottom-[15%] right-[3%]" },
    { src: image10, alt: "Cheesy Pizza", style: "bottom-[-1%] left-[30%]" },
    { src: image16, alt: "Special Dish", style: "top-[36%] left-[36%] w-40 h-40" },
  ];

  return (
    <div className="bg-gradient-to-r from-orange-800 to-orange-600 text-white px-6 py-12 relative overflow-hidden">

      {/* 🔝 Social Media Icons */}
      <div className="absolute top-4 right-6 flex gap-4 text-white text-xl z-50">
        <FaFacebookF className="hover:text-yellow-300 transition" />
        <FaInstagram className="hover:text-yellow-300 transition" />
        <FaYoutube className="hover:text-yellow-300 transition" />
      </div>

      {/* 🔄 Main Layout */}
      <div className="md:flex md:items-center md:justify-between">

        {/* 📝 LEFT SECTION: Promo Text */}
        <div className="md:w-1/2 space-y-5 m-9">
          <div className="bg-red-600 px-4 rounded-bl-4xl rounded-tr-4xl py-4 ml-3 inline-block text-2xl font-bold rounded-sm shadow-md">
            BEST OFFER
          </div>

          <div className="flex items-end space-x-2 ml-8">
            <span className="text-yellow-400 text-7xl font-extrabold">50%</span>
            <span className="bg-red-600 w-12 h-12 flex font-bold rounded-full items-center justify-center shadow-md">
              OFF
            </span>
          </div>

          {/* ✨ Juicy Promo Lines */}
          <div className="space-y-2 mt-4">
            <p className="text-2xl font-bold italic">Try something new — limited time only!</p>
            <p className="text-xl font-semibold text-yellow-200">Featured Specials</p>
            <p className="text-md text-white/80">
              Exotic flavors, sizzling bites, and unforgettable taste — only this week!
            </p>
          </div>

          {/* 🎯 Order Now Button */}
          <button className="mt-6 bg-gradient-to-r from-yellow-300 to-red-500 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300">
            Order Now
          </button>

          {/* 📍 Contact Info */}
          <div className="mt-6 space-y-2 text-sm text-white/90">
            <p>📍 123 ABC Street, Uni 21, Bangladesh</p>
            <p>📞 +88 012 345 6789</p>
          </div>
        </div>

        {/* 🖼️ RIGHT SECTION: Image Collage */}
        <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center">
          <div className="relative w-[90%] max-w-[400px] h-[400px]">

            {/* 🍽️ Image Circles */}
            {images.map(({ src, alt, style }, i) => (
              <img
                key={i}
                src={src}
                alt={alt}
                loading="lazy"
                className={`absolute ${style} w-36 h-36 rounded-full object-cover border-e-8 border-white shadow-lg`}
              />
            ))}

            {/* 🎟️ Coupon Box 1 */}
            <div className="absolute bottom-[28px] left-[-18px] transform -translate-x-1/2 bg-gradient-to-br from-teal-800 to-teal-500 text-white p-2 rounded-br-2xl rounded-tl-2xl rounded-bl-2xl rounded-tr-none shadow-2xl w-[250px] z-40 border-2 border-white/20 text-center">
              <p className="text-xs uppercase tracking-widest text-white/80">This Weekend Only</p>
              <p className="text-lg font-bold tracking-widest">
                USE COUPON <span className="text-yellow-300">BBKHABO30</span>
              </p>
            </div>

            {/* 🎟️ Coupon Box 2 */}
            <div className="absolute bottom-[-10px] left-0 transform -translate-x-1/2 bg-gradient-to-br from-red-900 to-red-700 text-white p-2 rounded-md shadow-2xl w-[150px] z-40 border-2 border-white/20 text-center">
              <p className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">
                GET 30% OFF
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
