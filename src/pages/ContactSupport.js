import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import contactsupportlogo from "../assets/TNC_2020_Logo_Landscape_Group_black.png";
import '../pages/ContactSupport.css';

function ContactSupport() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-support">
    <div className="contact-support-container">
      <h2 className="contact-support-title">
        Contact Support&nbsp;
        <FontAwesomeIcon icon={faHeadphones} className="headphones-icon" />
        </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="contact-support-label">Name:</label>
          <input
            className="contact-support-input"
            type="text"
            id="name"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="contact-support-label">Email:</label>
          <input
            className="contact-support-input"
            type="email"
            id="email"
            placeholder="Enter e-mail address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="contact-support-label">Message:</label>
          <textarea
            className="contact-support-textarea"
            id="message"
            value={message}
            placeholder="Enter a message"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-support-button">Submit</button>
      </form>
      <img src={contactsupportlogo} alt="Logo" className="contact-support-logo" />
      <p className="contact-support-text">
      477 E Rodriguez Sr. Ave, Quezon City, 1111 Metro Manila
      </p>
      <p className="contact-support-text">
      (02) 7718 8095
      </p>
      <p className="contact-support-text">
      business@tnc.com.ph
      </p>
    </div>
    </div>
  );
}

export default ContactSupport;
