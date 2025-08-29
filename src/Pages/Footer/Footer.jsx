import React from 'react'
import './Footer.css'
import instagram from '../../Assets/instagram.png'
import youtube from '../../Assets/youtube.png'
import whatsapp from '../../Assets/whatsapp.png'
const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-top'>
    <div className='footer-column'>
      <h4>Quick Link</h4>
      <ul>
      <li>About Us</li>
      <li>Term & Conditiond</li>
      <li>Privacy Policy</li>
      <li>Help</li>
      <li>Rooms</li>
      </ul>
    </div>
    <div className='footer-column'>
      <h4>Support</h4>
      <ul>
      <li>Our Location</li>
      <li>The Hosts</li>
      <li>About</li>
      <li>Contact</li>
      <li>Restaurant</li>
      </ul>
    </div>
    <div className='footer-column'>
      <h4>Contact Info</h4>
      <h5>Address</h5>
      <p>98 Wesr 21tg Street,Suite 721 New York NY 10016</p>
      <h5>Phone</h5>
     <p>(+1)4353555</p>
      <h5>Email</h5>
      <p>info@yourdomain.com</p>
    </div>
    <div className='footer-column'>
      <h4>Subscribe</h4>
      <p>Sign up for email</p>
      <input type="email"
      placeholder="your email"/><br></br><br></br>
      <button>submit</button>
    </div>
    </div>
    <hr></hr>
    <div className='footer-bottom'>
    <p>Copyright © 2025 All rights reserved | This template is made with  by Colorlib</p>
    </div>
    <div className='social_media'>
      <img src={instagram} alt="instagram"/>
      <img src={youtube} alt="youtube"/>
      <img src={whatsapp} alt="whatsapp"/>
    </div>
</div>
  )
}

export default Footer;