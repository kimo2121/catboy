import React from "react";
import Slider from "react-slick";
import { dataImg } from "./data";
import "./slider.css";
const MultiSlider: React.FC = () => {
  const settings = {
    className: "center",
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 10,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-component">
      <Slider {...settings}>
        {dataImg.map((item, index) => (
          <div key={index} className="inner-slider">
            <img key={index} src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default MultiSlider;
