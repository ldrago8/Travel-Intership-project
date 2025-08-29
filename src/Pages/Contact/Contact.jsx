import React, { useState } from 'react';
import home4 from '../../Assets/home4.png';
import './Contact.css'; 
import Customers from '../Customers/Customers';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent Successfully!');
    setFormData({ name: '', phone: '', email: '', message: '' }); 
  };

  return (
    <div>
      <div className="main">
        <img src={home4} alt="travel" className="image" />
        <div className="logo">Hepta</div>
        <div className="text">
          <h1>Contacts</h1>
          <h4>A free template by Calobria. Download and Share!</h4>
        </div>
      </div>
      <div className='form'>
      <div className="left">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
          <br></br>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <br></br>
          <label>Message</label>
          <br></br>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="4"
            required
          ></textarea>
          <br></br>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className='right'>
        <h4>ADDRESS</h4>
        <p><b>98 West 21th Street, Suite 721 New York NY 10016</b></p>
        <h4>PHONE</h4>
        <p><b>(+1) 435 3533</b></p>
        <h4>Email:</h4>
        <p><b>info@yourdomain.com</b></p>
      </div>
      
    </div>
    <Customers/>
    </div>
    
  );
};

export default Contact;
