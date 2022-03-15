import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar border-rad-none">
      <button className="btn btn-outlined display-none" id="btn-nav-toggle">
        <i className="fas fa-bars" aria-hidden="true"></i>
      </button>
      <ul className="flex-gap-mdm">
        <li className="nav-image-container">
          <img
            className="image-resp border-rad-20"
            src="https://i.pinimg.com/originals/3e/01/a3/3e01a31a0a5d9185e399f48802949f14.png"
            alt="logo"
          />
        </li>
      </ul>
      <ul className="flex-spc-btwn">
        <li>
          <input
            type="search"
            name="search icon"
            className="form-input width-100"
            placeholder="Search"
            id=""
            spellCheck="false"
            data-ms-editor="true"
          />
        </li>
      </ul>
      <ul className="flex-spc-btwn">
        <li>
          <a href="./screens/cart-page/index.html" className="cta-text-hover">
            <i className="fas fa-shopping-cart" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <button className="btn btn-cta box-shadow-none">Login</button>
        </li>
        <li>
          <button className="btn btn-outlined border-none box-shadow-none">
            <a href="./screens/signup/index.html"> Signup </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
