import React from 'react';
import './ContactPageSubmit.css';
import { Link } from 'react-router-dom';

const ContactPageSubmit = () => {
  return (
    <div className='contact-submit-background'>
    <div className='contact-submit-wrapper'>
        <form action="">
            <h1>Thank you!</h1>
            <h3>Your information has been submitted.</h3>

            <Link to="/"> 
              <button type="submit">Confirm</button>
            </Link>
        </form>
    </div>
    </div>
  )
}

export default ContactPageSubmit;

