import React from 'react';
import './Aboutus.css';
import home1 from '../../Assets/home1.jpg';
import home from '../../Assets/home.png';
import claregupta from '../../Assets/claregupta.png';
import slater from '../../Assets/slater.png';
import john from '../../Assets/john.png';
import Slideshow from '../Slideshow/Slideshow';

const Aboutus = () => {
  return (
    <div>
    <div className="main">
        <img src={home1} alt="Travel Header" className="image" />
          <div className="logo">Hepta</div>
          <div className="text">
            <h1>About Us</h1>
            <h4>A free template by Colorlib. Download and share!</h4>
          </div>
        </div>

      <div className="welcome-section">
        <img src={home} alt="Welcome" className="welcome-img" />
        <div className="welcome-text">
          <h2>Welcome Travel & Tours</h2>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
            <br /><br />
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="hotel-gallery">
        <h1>Hotel Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio <br />
          repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis,<br />
          blanditiis laboriosam alias. Sed.
        </p>
        <div className="slideshow-wrapper">
          <Slideshow />
        </div>
      </div>

      
      <div className="team-section">
  <h1>Team</h1>
  <p>
    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br />
    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the<br />
    Semantics, a large language ocean.
  </p>

  <div className="team-images">
    <div className="team-member">
      <img src={john} alt="John" />
      <p>CEO, Co-Founder</p>
      <h4>Vince Richardson</h4>
    </div>

    <div className="team-member">
      <img src={slater} alt="Slater" />
      <p>Marketer, Co-Founder</p>
      <h4>Jeff Stark</h4>
    </div>

    <div className="team-member">
      <img src={claregupta} alt="Clare Gupta" />
      <p>CTO, Co-Founder</p>
      <h4>Jean Love</h4>
    </div>
  </div>
</div>
</div>
  );
};

export default Aboutus;
