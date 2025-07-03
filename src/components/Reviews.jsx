import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Sophia Lane",
    text: "The food quality is amazing, and delivery is super fast! Highly recommend!",
    rating: 5,
  },
  {
    name: "Alex Carter",
    text: "Fresh ingredients make all the difference. Moodie Foodie never disappoints!",
    rating: 4,
  },
  {
    name: "Mia Thompson",
    text: "The best nutritional meals! Great taste and super healthy!",
    rating: 5,
  },
  {
    name: "David King",
    text: "Unbeatable flavors and great service! My go-to food delivery app.",
    rating: 5,
  },
  {
    name: "Olivia White",
    text: "Exceptional service and delicious food every time. A true lifesaver!",
    rating: 5,
  },
  {
    name: "James Brown",
    text: "Ingredients are top-notch and the taste is consistently great. Highly satisfied!",
    rating: 4,
  },
];

const Reviews = () => {
  const [translateX, setTranslateX] = useState(0);

  const cardOuterWidth = 384 + 16 * 2; // w-96 (384px) + mx-4 (16px left + 16px right) = 416px
  // INCREASED SPEED HERE:
  const scrollSpeed = 50; // Pixels per second (increased from 20 to 50 for faster movement)
  const intervalDelay = 10; // milliseconds

  useEffect(() => {
    const pixelsPerStep = (scrollSpeed * intervalDelay) / 1000;
    const totalOriginalContentWidth = reviews.length * cardOuterWidth;

    const interval = setInterval(() => {
      setTranslateX((prevTranslateX) => {
        let newTranslateX = prevTranslateX - pixelsPerStep;

        if (newTranslateX <= -totalOriginalContentWidth) {
          return 0;
        }
        return newTranslateX;
      });
    }, intervalDelay);

    return () => clearInterval(interval);
  }, [cardOuterWidth, scrollSpeed, intervalDelay, reviews.length]);

  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">What Our Customers Say</h2>
        <p className="text-lg text-gray-600 mt-2 font-semibold">Real reviews from real food lovers.</p>
      </div>

      <div className="relative overflow-hidden max-w-6xl mx-auto">
        <div
          className="flex whitespace-nowrap"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: 'none',
            willChange: 'transform',
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 mx-4 p-8 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between"
              style={{ minHeight: '200px' }}
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{review.name}</h3>
                <p className="text-gray-700 text-lg mb-4" style={{ whiteSpace: 'normal' }}>
                  {review.text}
                </p>
              </div>
              <div className="flex mt-auto text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <React.Fragment key={i}>
                    {/* Larger stars */}
                    <FaStar className="text-xl" />
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;