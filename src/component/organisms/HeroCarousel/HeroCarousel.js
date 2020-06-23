import React from "react";
import Carousel_img from "../../assets/hero/imgpsh_fullsize_anim.png";
import Hero from "../../molecules/Hero/Hero";
import "./HeroCarousel.scss";
const HeroCarousel = () => {
  return (
    <div className="HeroCarousel-wapper">
      <Hero imges={Carousel_img} />
    </div>
  );
};
export default HeroCarousel;
