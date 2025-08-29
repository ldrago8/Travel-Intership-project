import React from 'react';
import goodfood from '../../Assets/goodfood.png';
import travel from '../../Assets/travel.png';
import airplane from '../../Assets/airplane.png';
import beach from '../../Assets/beach.png';
import mountain from '../../Assets/mountain.png';
import ballon from '../../Assets/ballon.png';


const Foods = () => {
  return (
    <div className='columns-container'>
      <div className='column'>
        <div className='column-top'>
          <img src={goodfood} alt="Good Foods" />
          <h1>Good Foods</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className='column-top'>
          <img src={travel} alt="Travel Anywhere" />
          <h1>Travel Anywhere</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className='column-top'>
          <img src={airplane} alt="Airplane" />
          <h1>Airplane</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>

      <div className='column'>
        <div className='column-top'>
          <img src={beach} alt="Beach Resort" />
          <h1>Beach Resort</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className='column-top'>
          <img src={mountain} alt="Mountain Climbing" />
          <h1>Mountain Climbing</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className='column-top'>
          <img src={ballon} alt="Hot Air Balloon" />
          <h1>Hot Air Balloon</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
    </div>
  );
};

export default Foods;
