import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

const Cover = ({ img, title }) => {
  return (
    <Parallax
      bgImage={img}
      strength={300}
      bgImageStyle={{
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <div className="h-[400px] md:h-[400px] lg:h-[400px] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 text-center text-white px-4 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-3 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-sm text-gray-200 mb-4">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
          </p>
          <Link to={`/order`}>
          <button className="px-4 py-2 rounded bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm hover:brightness-110">
            Explore Menu
          </button>
          </Link>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;