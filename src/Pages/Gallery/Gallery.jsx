import React from 'react';
import './Gallery.css';
import home1 from '../../Assets/home1.jpg';
import food from '../../Assets/food.png';
import resort from '../../Assets/resort.png';
import climbing from '../../Assets/climbing.png';
import hotelroom from '../../Assets/hotelroom.png';

const Gallery = () => {
  return (
    <div>
      <div className='main'>
        <img src={home1} alt="gallery" />
        <div className='logo'>Hepta</div>
        <div className='text'>
          <h1>Gallery</h1>
          <p>A free template by Colorlib. Download and share!</p>
        </div>
      </div>
      <div className='gallery-section'>
        <div className='gallery-row'>
          <img src={food} alt="food" />
          <img src={resort} alt="resort" />
          <img src={hotelroom} alt="hotel room" />
          <img src={climbing} alt="climbing" />
        </div>
        <div className='gallery-row'>
          <img src={hotelroom} alt="hotel room" />
          <img src={climbing} alt="climbing" />
          <img src={food} alt="food" />
          <img src={resort} alt="resort" />
        </div>
        <div className='gallery-row1'>
          <img src={food} alt="food" />
          <img src={resort} alt="resort" />
        </div>
        <div className='gallery-row'>
          <img src={hotelroom} alt="hotel room" />
          <img src={climbing} alt="climbing" />
          <img src={food} alt="food" />
          <img src={resort} alt="resort" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
