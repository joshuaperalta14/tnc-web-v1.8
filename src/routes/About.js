import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from "../assets/Restaurant Cafe working.jpg";
import aboutlogo from "../assets/TNC_2020_Logo_Landscape_Group_white2.png";
import './About.css';

const About = () => {
  return (
    <div className="about-us">

      <div className="about-section">
        <div className="image-container">
          <Link to="/">
            <img src={aboutlogo} alt="Logo" className="about-logo" title="Go back to main page" />
          </Link>
        </div>
        <div className="about-image-container">
          <img src={aboutImg} alt="Background" className="about-img" />
        </div>
        <div className="description">
          <h1>
            <strong>Mission</strong>
          </h1>
          <p>
            To offer top-notch level of gaming experience in the Philippine Market equipped with High-End computers, fast internet connection in a comfortable ambiance with affordable
            value. In line with our campaign to elevate the standard of ICafes in our country, we also strive to uplift electronic sports in the whole SEA region. With events that will
            give way to amateur teams in their path to success.
          </p>
          <h2>
          <strong>Vision</strong>
          </h2>
          <p>
            To maintain our leadership in both the ICafe and eSports industry by providing available resources in enhancing our service through research and innovation.
            TNC also envisions itself asserting its advocacy of professionalism in the eSports gaming industry in our country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
