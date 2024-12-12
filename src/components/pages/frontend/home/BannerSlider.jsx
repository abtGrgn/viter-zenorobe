import React from "react";
import SliderItem from "./SliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <section className="banner-slider">
      <Slider {...settings}>
        <SliderItem
          img="slider-1.jpg"
          header="header 1"
          subheader="subheader 1"
        />
        <SliderItem
          img="slider-2.jpg"
          header="header 2"
          subheader="subheader 2"
        />
        <SliderItem
          img="slider-3.jpg"
          header="header 3"
          subheader="subheader 3"
        />
      </Slider>
    </section>
  );
};

export default BannerSlider;
