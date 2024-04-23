import "./BackgroundStyles.css";
import IntroImg from "../assets/blank background.png";
import { Link } from "react-router-dom";

import React from "react";

const Background = () => {
  return (
    <div className="back-ground">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      <div className="content">
        <p><strong>Ready to get started?</strong></p>
        <h1>Sign up or contact us</h1>
        <div>
            <Link to="/login" className="btn" title="Sign In">Sign In</Link>
            <Link to="/contact" className="btn btn-light" title="Contact Us">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Background;
