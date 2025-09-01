import React from 'react';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home from '../../Assets/home.png'
import home1 from '../../Assets/home1.jpg'
import food from '../../Assets/food.png'
import resort from '../../Assets/resort.png'
import hotelroom from '../../Assets/hotelroom.png'
import climbing from '../../Assets/climbing.png'
import Foods from '../Foods/Foods';
import Customers from '../Customers/Customers';
import Slideshow from '../Slideshow/Slideshow';
const Home = () => {
  return (
    <div>
    <div className='main'>
      <img src={home} alt="travel" className="image"/>
      <div className='logo'>Hepta</div>
      <div className='text'>
        <h1>Travel & Tour</h1>
        <h4>A free template by Calobria.Download and Share!</h4>
        <button>Visit Calobria</button>
      </div>
    </div>
    <div className='main1'>
      <img src={home1} alt="travel" className='image1'/>
      <div className='heading'>
      <h1>Welcome To Our Website</h1><br></br>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    </div>
    </div>
    <div className='section'>
    <div className='time'>
      <h1>Experience Once In Your Life Time</h1>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    </div>
    </div>
    <Foods/>
    <div className='tour'>
      <h1>International Tour Management.</h1>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    </div>
    <Slideshow/>
    <div className='blogs'>
      <h1>Recent Blog Post</h1>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      <div className='blog-images'>
        <div className='blog-card'>
        <img src={food} alt="food"/>
        <p>February 26, 2018</p>
        <h1>45 Best Places To Unwind</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      <div className='blog-card'>
      <img src={resort} alt="resort"/>
        <p>February 26, 2018</p>
        <h1>45 Best Places To Unwind</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className='blog-card'>
        <img src={hotelroom} alt="hotelroom"/>
        <p>February 26, 2018</p>
        <h1>45 Best Places To Unwind</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>
    </div>
    </div>
      <Customers/>
    <div className='destination'>
      <h1>Top Destination</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
      <div className='top_destination'>
        <div className='reviews'>
      <img src={food} alt="food"/>
      <h1>Food & Wines</h1>
      <span>{'\u2605\u2605\u2605\u2605\u2606'}</span>
      <span>3239 reviews</span>
      </div>
      <div className='reviews'>
      <img src={resort} alt="resort"/>
      <h1>Resort & Spa</h1>
      <span>{'\u2605\u2605\u2605\u2605\u2606'}</span>
      <span>4921 reviews</span>
      </div>
      <div className='reviews'>
      <img src={hotelroom} alt="hotelroom"/>
      <h1>HotelRooms</h1>
      <span>{'\u2605\u2605\u2605\u2605\u2606'}</span>
      <span>2112 reviews</span>
      </div>
      <div className='reviews'>
      <img src={climbing} alt="climbing"/>
      <h1>Mountain Climbing</h1>
      <span>{'\u2605\u2605\u2605\u2605\u2606'}</span>
      <span>6421 reviews</span>
      </div>
      </div>
    </div>
   </div>
   
  );
};

export default Home;
