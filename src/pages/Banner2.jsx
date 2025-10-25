import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

import image16 from '../assets/home/image16.avif';

const Banner2 = () => {
  return (
    <div
      className="relative min-h-[700px] px-8 py-24 overflow-hidden font-sans"
      style={{
        background: 'linear-gradient(120deg, #7c1818 40%, #f4d35e 100%)',
      }}
    >
      {/* Social Icons */}
      <div className="absolute top-6 right-8 flex gap-6 text-white text-xl z-30">
        {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            aria-label="social"
            className="transition duration-200 hover:text-yellow-400 hover:scale-110"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Yellow Big Curve */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-400 rounded-tl-full z-10 blur-3xl opacity-50 pointer-events-none"></div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between z-20 relative max-w-7xl gap-16">
        {/* Left Section */}
        <div className="text-center lg:text-left lg:w-5/12 space-y-8">
          <h2 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-lg">
            <span className="text-white">Super </span>
            <span className="text-yellow-400">Delicious</span>
            <br />
            <span className="text-white">Menu</span>
          </h2>

          {/* Sizzling Text Details */}
          <p className="text-yellow-300 font-semibold text-lg leading-relaxed drop-shadow-md max-w-md mx-auto lg:mx-0">
            Savor the flavor explosion with our hand-crafted, crispy fried chicken paired perfectly
            with golden fries. Fresh, juicy, and irresistible every bite.
          </p>

          {/* Promo Code Box */}
          <div className="bg-white/30 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/30 ring-2 ring-yellow-400/40 max-w-sm mx-auto lg:mx-0">
            <p className="text-xs uppercase tracking-widest text-white font-light mb-1">
              Use Promo Code
            </p>
            <p className="text-3xl font-bold tracking-wide text-yellow-400 mb-3">BBKHABO30</p>
            <div className="bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-md text-lg inline-block animate-bounce select-none">
              GET 30% OFF
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-yellow-400 border-2 rounded-full w-20 my-8 mx-auto lg:mx-0" />

          {/* Contact Info */}
          <div className="space-y-2 text-sm text-white/90 max-w-sm mx-auto lg:mx-0">
            <p>📍 123 ABC Street, Uni 21, Bangladesh</p>
            <p>📞 +88 012 345 6789</p>
          </div>

          {/* Order Now Button */}
          <button className="mt-8 bg-yellow-400 text-red-900 font-semibold px-8 py-4 rounded-full shadow-xl text-xl transition-transform duration-300 hover:scale-105 hover:bg-yellow-300 hover:text-white focus:outline-none focus:ring-4 focus:ring-yellow-400">
            Order Now
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="relative lg:w-6/12 flex justify-center items-center">
          <div className="relative w-full max-w-lg">
            <img
              src={image16}
              alt="Fried chicken and fries"
              loading="lazy"
              className="rounded-3xl shadow-2xl border-8 border-white w-full object-cover"
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.13)' }}
            />
            {/* Free Delivery Tag */}
            <div className="absolute top-8 right-8 bg-yellow-400 text-red-900 text-xs font-bold px-3 py-1 rounded-full shadow drop-shadow-xl transform rotate-6 whitespace-nowrap">
              Free Home Delivery
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Icons */}
      <div className="absolute top-14 left-14 text-yellow-400 text-3xl font-extrabold animate-float">★</div>
      <div className="absolute bottom-12 left-24 text-yellow-400 text-xl font-bold rotate-[-17deg] animate-float-slow">→</div>
      <div className="absolute bottom-24 right-40 text-yellow-400 text-2xl font-black rotate-6 animate-float">✦</div>
    </div>
  );
};

export default Banner2;
