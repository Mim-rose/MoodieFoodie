import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import ReactStars from "react-rating-stars-component";
import { v4 as uuidv4 } from 'uuid';

const API_URL = import.meta.env.VITE_API_URL;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/reviews`)
      .then(res => res.json())
      .then(data => {
        const enriched = data.map(review => ({
          ...review,
          _uuid: review._id || uuidv4()
        }));
        setReviews(enriched);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch reviews:", err);
        setError("Failed to load reviews.");
        setLoading(false);
      });
  }, []);

  return (
    <section className='my-20 bg-gray-50 py-10'>
      <SectionTitle
        title="What our clients say"
        subtitle="Real reviews from real food lovers"
      />

      {loading && <p className="text-center text-gray-500">Loading reviews...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <Swiper
          style={{ padding: '0 50px' }}
          slidesPerView={1}
          spaceBetween={30}
          loop={reviews.length > 2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper amber-nav"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._uuid}>
              <div className='px-6 md:px-24 flex flex-col items-center text-center bg-white rounded-xl shadow-lg border border-gray-100 py-8 mx-auto max-w-xl'>
                <ReactStars
                  count={5}
                  value={Number(review.rating) || 0}
                  size={24}
                  activeColor="#ffd700"
                  color="#ccc"
                  edit={false}
                />
                <p className="my-4 text-gray-700 text-lg">{review.details}</p>
                <h3 className="text-2xl text-orange-400 font-semibold">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Reviews;