import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../global-context/auth-context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isUserAuthenticated } = useAuthContext();
  const navigateTo = useNavigate();

  return (
    <nav className="nav-bar border-rad-none">
      <button className="btn btn-outlined display-none" id="btn-nav-toggle">
        <i className="fas fa-bars" aria-hidden="true"></i>
      </button>
      <ul className="flex-gap-mdm">
        <li className="nav-image-container">
          <Link to="/">
            <img
              className="image-resp border-rad-20"
              src="https://i.pinimg.com/originals/3e/01/a3/3e01a31a0a5d9185e399f48802949f14.png"
              alt="logo"
            />
          </Link>
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
          <button title="Cart">
            <Link to={isUserAuthenticated ? "/cart" : "/log-in"}>
              <i
                className="fas fa-shopping-cart cta-text-hover"
                aria-hidden="true"
              ></i>
            </Link>
          </button>
        </li>
        <li>
          {isUserAuthenticated && (
            <button
              className="cta-text-hover"
              title="Wishlist"
              onClick={() => navigateTo("/wishlist")}
            >
              <i className="fas fa-bookmark" aria-hidden="true"></i>
            </button>
          )}
        </li>
        <li>
          {isUserAuthenticated ? (
            <button className="btn btn-cta box-shadow-none">
              <Link to="/log-out">Logout</Link>
            </button>
          ) : (
            <button className="btn btn-cta box-shadow-none">
              <Link to="/log-in">Login</Link>
            </button>
          )}
        </li>
        <li>
          {isUserAuthenticated ? (
            <button>
              <img
                src="https://picsum.photos/200/300"
                className="avatar avatar-xsml"
                alt="random image"
              />
            </button>
          ) : (
            <button className="btn btn-outlined border-none box-shadow-none">
              <Link to="/sign-up"> Sign up </Link>
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
