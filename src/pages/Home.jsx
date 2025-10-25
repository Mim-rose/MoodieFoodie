import React from 'react'
import Banner from './Banner';
import Banner2 from './Banner2';
import BannerMain from './BannerMain';
import CategoryCarousel from './CategoryCarousel';
import Menu from './Menu';
import Featured from './Featured';
import Reviews from './Reviews';
import HomeCardsSection from './HomeCardsSection';

const Home = () => {
  return (
    <div>

      <BannerMain></BannerMain>
      <CategoryCarousel></CategoryCarousel>
      <HomeCardsSection></HomeCardsSection>
      <Menu></Menu>
      <Featured></Featured>
      <Reviews></Reviews>




    </div>
  )
}

export default Home;