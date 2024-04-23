import React from 'react';
import './ContactPage.css';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className='contact-background'>
      <div className='contact-wrapper'>
        <form action="">
          <h1>Contact Us</h1>
          <h3>Fill out the details below so that we can contact you</h3>
          <div className="input-box">
            <input type="email" placeholder='Email address' required />
          </div>
          <div className="input-box">
            <input type="phone" placeholder='Phone number' required />
          </div>
          <div className="input-box">
            <textarea rows="4" placeholder='Message' required></textarea> 
          </div>
          <Link to="/contactsubmit"> 
            <button type="submit">Submit</button>
          </Link>

          <div className="contact-form-link">
            <h3><Link to="/" className="link">↩&nbsp;Back to Home</Link></h3>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage;
