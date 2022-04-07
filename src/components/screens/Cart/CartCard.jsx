import React from "react";
import { removeFromCartlistService } from "../../../services/cart-services";
import { useGlobalVarContext } from "../../global-context/global-variables";
import { useCartlistContext } from "../../global-context/cart-context";
import { useWishlistContext } from "../../global-context/wishlist-context";
import { addToWishlistService } from "../../../services/wishlist-services";

function CartCard({ product }) {
  const { token } = useGlobalVarContext();
  const { dispatch: cartlistDispatch } = useCartlistContext();
  const { dispatch: wishlistDispatch } = useWishlistContext();
  const { _id, title, teacher, price, image, rating, prevPrice } = product;

  const moveToWishlistHandler = async (productId, product, encToken) => {
    try {
      const cartResponse = await removeFromCartlistService(productId, encToken);
      console.log(cartResponse);
      cartlistDispatch({
        type: "GET_CARTLIST",
        payload: cartResponse.data.cart,
      });
      const wishlistResponse = await addToWishlistService(product, encToken);
      wishlistDispatch({
        type: "GET_WISHLIST",
        payload: wishlistResponse.data.wishlist,
      });
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
    <div className="light-bg-color cart-card-width">
      <div className="curved-border padding-sml box-shadow-uni">
        <div className="grid-col-2--50-50">
          <div className="curved-border">
            <div className="image-container">
              <img
                className="image-resp curved-border-top"
                src={image}
                alt={title}
              />
            </div>
          </div>
          <div className="flex-column padding-sml">
            <h2 className="headline-typography">{title}</h2>
            <h3 className="card-subtitle">By {teacher}</h3>
            <div className="rating">
              <span className="rating-positive">
                <i className="fas fa-star"></i>
              </span>
              <span className="rating-positive">
                <i className="fas fa-star"></i>
              </span>
              <span className="rating-positive">
                <i className="fas fa-star"></i>
              </span>
              <span className="rating-positive">
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span className="fs-sml card-subtitle">{rating}</span>
            </div>

            <h4 className="fs-mdm">
              <span className="cta-text">
                ₹ {price} <i className="fas fa-tag"></i>
              </span>
              <span className="fs-sml strike card-subtitle">{prevPrice}</span>
            </h4>
          </div>
        </div>
        <div className="flex-f-end">
          <button
            className="cta-text-hover"
            onClick={() => moveToWishlistHandler(_id, product, token)}
          >
            Move to Wishlist
          </button>
          <button
            className="danger-txt-hover"
            onClick={() => removeFromCartlistHandler(_id, token)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
