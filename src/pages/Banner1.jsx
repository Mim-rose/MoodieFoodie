import React from 'react'
// Import carousel styles and component
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Import images
import dinner from "../assets/home/dinner.jpg";
import soup from "../assets/home/soup.jpg";
import featured from "../assets/home/featured.jpg";
import 01 from "../assets/home/01.jpg"
import 02 from "../assets/home/02.jpg"
import 03 from "../assets/home/03.jpg"
import 04 from "../assets/home/04.jpg"
import 05 from "../assets/home/05.jpg"
import 06 from "../assets/home/06.jpg"


// Import React and icons
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Banner1 = () => {
  return (
     <div className="w-full h-[80vh]">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={2000}
        showStatus={false}
        showArrows={false}
        swipeable
      >

        {/* 🍽️ Slide 1: Dinner Special */}
        <div className="relative w-full h-[80vh]">
          <img src={dinner} className="w-full h-full object-cover" alt="Dinner" />

          <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-between px-12 py-8">

            {/* Vertical label */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-700 px-4 py-2 text-white font-bold tracking-widest rotate-[-90deg]">
              DINNER
            </div>

            {/* Promotional content */}
            <div className="text-white max-w-xl">
              <h2 className="text-5xl font-extrabold leading-tight">
                Elegant <span className="text-yellow-400">Dinner</span> Feast
              </h2>
              <p className="text-xl mt-2">Tonight Only — Limited Tables</p>

              {/* Coupon box */}
              <div className="bg-yellow-600 text-black px-4 py-2 rounded-lg shadow-lg mt-4 inline-block">
                USE CODE <span className="font-bold">BBKHABO50</span> — <span className="text-white">GET 50% OFF</span>
              </div>

              {/* Contact info */}
              <div className="mt-6 text-sm">
                <p>📍 123 ABC Street, Uni 21, Bangladesh</p>
                <p>📞 +88 012 345 6789</p>
              </div>
            </div>

            {/* Social media icons */}
            <div className="absolute top-4 right-4 flex gap-3 text-white text-xl">
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* 🥣 Slide 2: Soup Deals */}
        <div className="relative w-full h-[80vh]">
          <img src={soup} className="w-full h-full object-cover" alt="Soup" />
          <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center px-12 py-8">
            <div className="text-white text-center">
              <h2 className="text-5xl font-extrabold mb-4">Hot Soup Deals</h2>
              <p className="text-xl">Warm up with flavor — 15% off today!</p>
            </div>
          </div>
        </div>

        {/* 🍕 Slide 3: Featured Specials */}
        <div className="relative w-full h-[80vh]">
          <img src={featured} className="w-full h-full object-cover" alt="Featured Dish" />
          <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center px-12 py-8">
            <div className="text-white text-center">
              <h2 className="text-5xl font-extrabold mb-4">Featured Specials</h2>
              <p className="text-xl">Try something new — limited time only!</p>
            </div>
          </div>
        </div>

      </Carousel>
    </div>
  )
}

export default Banner1;

