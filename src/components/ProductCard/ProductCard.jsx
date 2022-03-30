import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Wishlist from "../screens/Wishlist/Wishlist";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../global-context/auth-context";
import { useWishlistContext } from "../global-context/wishlist-context";
import { useCartlistContext } from "../global-context/cart-context";
import {
  addToWishlistService,
  removeFromWishlistService,
} from "../../services/wishlist-services";
import {
  addToCartlistService,
  removeFromCartlistService,
} from "../../services/cart-services";
import { useGlobalVarContext } from "../global-context/global-variables";

const productCardReducer = (state, action) => {
  switch (action.type) {
    case "WISHLIST":
      return { ...state, inWishlist: action.payload };
    case "CARTLIST":
      return { ...state, inCartlist: action.payload };

    default:
      break;
  }
};

function ProductCard({ product }) {
  const navigateTo = useNavigate();
  const { token } = useGlobalVarContext();
  const [state, dispatch] = useReducer(productCardReducer, {
    inWishlist: false,
    inCartlist: false,
  });
  const { inWishlist, inCartlist } = state;
  const { _id, title, teacher, price, image, rating, prevPrice } = product;
  const { isUserAuthenticated } = useAuthContext();
  const { state: wishlistState, dispatch: wishlistDispatch } =
    useWishlistContext();
  const { state: cartlistState, dispatch: cartlistDispatch } =
    useCartlistContext();
  const { cartlist } = cartlistState;
  const { wishlist } = wishlistState;

  useEffect(() => {
    wishlist.find((item) => item._id === _id)
      ? dispatch({ type: "WISHLIST", payload: true })
      : dispatch({ type: "WISHLIST", payload: false });

    cartlist.find((item) => item._id === _id)
      ? dispatch({ type: "CARTLIST", payload: true })
      : dispatch({ type: "CARTLIST", payload: false });
  }, [wishlist, cartlist]);

  const addToWishlistHandler = async (productItem, token) => {
    try {
      const response = await addToWishlistService(productItem, token);
      wishlistDispatch({
        type: "GET_WISHLIST",
        payload: response.data.wishlist,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const removeFromWishlistHandler = async (productId, token) => {
    try {
      const response = await removeFromWishlistService(productId, token);
      wishlistDispatch({
        type: "GET_WISHLIST",
        payload: response.data.wishlist,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addToCartlistHandler = async (product, token) => {
    try {
      const response = await addToCartlistService(product, token);
      cartlistDispatch({ type: "GET_CARTLIST", payload: response.data.cart });
    } catch (error) {
      console.log(error);
    }
  };
  const removeFromCartlistHandler = async (productId, token) => {
    try {
      const response = await removeFromCartlistService(productId, token);
      cartlistDispatch({ type: "GET_CARTLIST", payload: response.data.cart });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="curved-border flex-column box-shadow-uni">
      <div className="image-container">
        <img className="image-resp curved-border-top" src={image} alt={title} />

        <div>
          <button
            className="pos-abs-top-right-custom fs-mdm border-radius-100 light-txt cursor-pointer"
            title={inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            onClick={
              isUserAuthenticated
                ? inWishlist
                  ? () => removeFromWishlistHandler(_id, token)
                  : inCartlist
                  ? () => {
                      removeFromCartlistHandler(_id, token);
                      addToWishlistHandler(product, token);
                    }
                  : () => addToWishlistHandler(product, token)
                : () => navigateTo("/log-in")
            }
          >
            <span className={inWishlist ? "red-txt" : ""}>
              <i className="fas fa-heart"></i>
            </span>
          </button>
        </div>
      </div>
      <div className="text-align-center">
        <h2 className="headline-typography">{title}</h2>
        <h3 className="card-subtitle">
          By {teacher}
          <span className="margin-sml"> |2.5 hours|</span>
        </h3>
        <p>{rating}/5</p>
        <p>
          <span className="heading-strong">{price} </span>
          <span className="card-subtitle strike">{prevPrice}</span>
        </p>

        <div className="flex-center">
          <button
            className="btn btn-cta light-text-color btn-wide margin-none border-rad-none"
            onClick={
              isUserAuthenticated
                ? inCartlist
                  ? () => navigateTo("/cart")
                  : inWishlist
                  ? () => {
                      addToCartlistHandler(product, token);
                      removeFromWishlistHandler(_id, token);
                    }
                  : () => addToCartlistHandler(product, token)
                : () => navigateTo("/log-in")
            }
          >
            {inCartlist ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export { removeFromWishlistService, addToWishlistService };
export default ProductCard;
