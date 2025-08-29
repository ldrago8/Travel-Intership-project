import React from 'react';
import home3 from '../../Assets/home3.png';
import Foods from '../Foods/Foods';
import home from '../../Assets/home.png';
import home1 from '../../Assets/home1.jpg';
import food from '../../Assets/food.png';
import resort from '../../Assets/resort.png';
import hotelroom from '../../Assets/hotelroom.png';
import './Hotels.css';
import Slideshow from '../Slideshow/Slideshow';

const Hotels = () => {
  return (
    <div>
      <div className='main'>
        <img src={home3} alt="our hotel" className="image" />
        <div className='logo'>Hepta</div>
        <div className='text'>
          <h1>Our Hotel</h1>
          <h4>A free template by Calobria. Download and Share!</h4>
        </div>
      </div>

      <Foods />

      <div className='home'>
        <img src={home} alt="home" className="home-img" />
        <div className="home-text">
          <h1>Family Room</h1>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
            <br />
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <button> Learn More</button>
        </div>
      </div>
      <div className='home'>
        <img src={home1} alt="home1" className="home-img" />
        <div className="home-text">
          <h1>Presidential Room</h1>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
            <br />
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <button> Learn More</button>
        </div>
      </div>
      <div className='hotelgallery'>
      <h1>Hotel Gallery</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio <br></br> repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis,<br></br> blanditiis laboriosam alias. Sed.</p>
        <Slideshow/>
      </div>
       <div className='hotelgallery'>
      <h1>More Hotel Features</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio <br></br> repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis,<br></br> blanditiis laboriosam alias. Sed.</p>
      </div>
      <div className='display1'>
        <img src={food} alt='food'/>
        <img src={resort} alt='food'/>
        <img src={hotelroom} alt='food'/>
      </div>
    </div> 
  );
};

export default Hotels;
