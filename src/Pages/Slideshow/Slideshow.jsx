import React from 'react'
import './Slideshow.css';
import home1 from '../../Assets/home1.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slideshow = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true
  };
  return (
    <div>
       <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={home1} alt="Slide 1" className="slider-image" />
        </div>
        <div className="slide">
          <img src={home1} alt="Slide 2" className="slider-image" />
        </div>
        <div className="slide">
          <img src={home1} alt="Slide 3" className="slider-image" />
        </div>
        
      </Slider>
    </div>
 
    </div>
  )
}

export default Slideshow