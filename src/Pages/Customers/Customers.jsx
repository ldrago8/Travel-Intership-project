import React from 'react';
import claregupta from '../../Assets/claregupta.png';
import slater from '../../Assets/slater.png';
import john from '../../Assets/john.png';

const Customers = () => {
  return (
    <div className='customers'>
      <h1>Happy Customers</h1>
      <div className='happy'>
        <div className='customer'>
          <img src={claregupta} alt="Clare Gupta" />
          <p>
            “Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.”
          </p>
          <p>— Clare Gupta</p>
        </div>

        <div className='customer'>
          <img src={slater} alt="Rogie Slater" />
          <p>
            “Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.”
          </p>
          <p>— Rogie Slater</p>
        </div>

        <div className='customer'>
          <img src={john} alt="John Doe" />
          <p>
            “Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.”
          </p>
          <p>— John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
