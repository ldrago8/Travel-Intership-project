import React from 'react'
import './Slideshow.css';
import home3 from '../../Assets/home3.png'
import home4 from '../../Assets/home4.png'
import home from '../../Assets/home.png'
import food from '../../Assets/food.png'
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
          <img src={home} alt="Slide 1" className="slider-image" />
        </div>
        <div className="slide">
          <img src={home3} alt="Slide 2" className="slider-image" />
        </div>
        <div className="slide">
          <img src={home4} alt="Slide 3" className="slider-image" />
        </div>
        <div className="slide">
          <img src={food} alt="Slide 1" className="slider-image" />
        </div>
      </Slider>
    </div>
 
    </div>
  )
}

export default Slideshow