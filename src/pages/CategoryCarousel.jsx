import React from "react";
import Categories from "./Categories.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Mousewheel } from "swiper/modules";
import SectionTitle from "../components/SectionTitle.jsx";
import { Link } from "react-router-dom";

const CategoryCarousel = () => {
  return (
    <div className="py-6 px-4 bg-white w-full max-w-screen overflow-x-auto">
      <SectionTitle
        title="Crave by Category"
        subtitle="Swipe through flavors that speak your soul"
      />

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        freeMode={true}
        grabCursor={true}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        breakpoints={{
          640: { slidesPerView: 5 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 7 },
        }}
        modules={[Pagination, FreeMode, Mousewheel]}
        className="mySwiper"
      >
        {Categories.map((category) => (
          <SwiperSlide key={category.name.toLowerCase()}>
            {/* Updated Link: check if category is "all" */}
            <Link
              to={
                category.name.toLowerCase() === "all"
                  ? "/products" // route to AllProductsPage
                  : `/category/${category.name.toLowerCase()}` // route to CategoryPage
              }
            >
              <div className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-100 rounded hover:bg-red-100 transition cursor-pointer">
                {category.icon}
                <span className="capitalize text-sm font-medium text-gray-700">
                  {category.name}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full flex justify-center">
        <div className="swiper-pagination mt-6 mb-2 space-x-2" />
      </div>
    </div>
  );
};

export default CategoryCarousel;
