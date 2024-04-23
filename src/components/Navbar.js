import "./NavbarStyles.css";
import logo from "../assets/TNC_2020_Logo_Landscape_Group_white2.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <div>
        <Link to="/">
        <img src={logo} alt="Logo" className="logo" title="TNC Group" />
        </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/login">
                  &nbsp;Events&nbsp;&nbsp;&nbsp;
                </Link>
            </li>
            <li>
                <Link to="/login">
                  &nbsp;Inventory&nbsp;&nbsp;&nbsp;
                </Link>
            </li>
            <li>
                <Link to="/about">
                  &nbsp;About&nbsp;&nbsp;&nbsp;
                </Link>
            </li>
            <li>
                <Link to="/support">
                 &nbsp;Support&nbsp;&nbsp;&nbsp;
                </Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
                <FaTimes className="hamburger-icon" size={20} style={{ color: "#fff" }} />
            ) : (
                <FaBars className="hamburger-icon" size={20} style={{ color: "#fff" }} />
            )}
        </div>
    </div>
  );
};

export default Navbar;