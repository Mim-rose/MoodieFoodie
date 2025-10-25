import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img01 from "../assets/home/01.jpg";
import img02 from "../assets/home/02.jpg";
import img03 from "../assets/home/03.png";
import img04 from "../assets/home/04.jpg";
import img05 from "../assets/home/05.png";
import img06 from "../assets/home/06.png";

const BannerMain = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      interval={2000} // 3 seconds per slide
      transitionTime={400} // smooth transition
    >
      <div><img src={img01} alt="Slide 1" /></div>
      <div><img src={img02} alt="Slide 2" /></div>
      <div><img src={img03} alt="Slide 3" /></div>
      <div><img src={img04} alt="Slide 4" /></div>
      <div><img src={img05} alt="Slide 5" /></div>
      <div><img src={img06} alt="Slide 6" /></div>
    </Carousel>
  );
};

export default BannerMain;