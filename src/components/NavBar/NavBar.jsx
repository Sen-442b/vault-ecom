import axios from "axios";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../global-context/auth-context";
import { useNavigate } from "react-router-dom";
import { useCartlistContext } from "../global-context/cart-context";
import { useWishlistContext } from "../global-context/wishlist-context";

const Navbar = () => {
  const { isUserAuthenticated } = useAuthContext();
  const { state: cartlistState } = useCartlistContext();
  const { state: wishlistState } = useWishlistContext();
  const { cartlist } = cartlistState;
  const { wishlist } = wishlistState;
  const navigateTo = useNavigate();

  return (
    <nav className="nav-bar border-rad-none">
      <button
        className="btn btn-outlined display-none"
        id="btn-nav-toggle"
        title="menu"
      >
        <i className="fas fa-bars" aria-hidden="true"></i>
      </button>
      <ul className="flex-gap-mdm">
        <li className="nav-image-container">
          <NavLink to="/">
            <img
              className="image-resp border-rad-20"
              src="https://i.pinimg.com/originals/3e/01/a3/3e01a31a0a5d9185e399f48802949f14.png"
              alt="logo"
            />
          </NavLink>
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
          <button title="Cart" className="cursor-pointer">
            <NavLink
              to={isUserAuthenticated ? "/cart" : "/log-in"}
              className={({ isActive }) =>
                isActive ? "cta-text" : "cta-text-hover"
              }
            >
              <span className="custom-icon-wrapper">
                <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                {cartlist.length > 0 && (
                  <span className="badge custom-badge-notification">
                    {cartlist.length}
                  </span>
                )}
              </span>
            </NavLink>
          </button>
        </li>
        <li>
          {isUserAuthenticated && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "cta-text" : "cta-text-hover"
              }
              title="Wishlist"
              to="/wishlist"
            >
              <span className="custom-icon-wrapper cursor-pointer">
                <i
                  className="fas fa-bookmark cta-text-hover"
                  aria-hidden="true"
                ></i>
                {wishlist.length > 0 && (
                  <span className="badge custom-badge-notification-wl">
                    {wishlist.length}
                  </span>
                )}
              </span>
            </NavLink>
          )}
        </li>
        <li>
          {isUserAuthenticated ? (
            <button className="btn btn-cta box-shadow-none">
              <NavLink to="/log-out">Logout</NavLink>
            </button>
          ) : (
            <button className="btn btn-cta box-shadow-none">
              <NavLink to="/log-in">Login</NavLink>
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
              <NavLink to="/sign-up"> Sign up </NavLink>
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
