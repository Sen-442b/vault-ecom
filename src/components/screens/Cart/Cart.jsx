import React from "react";
import { useCartlistContext } from "../../global-context/cart-context";
import CartCard from "./CartCard";

function Cart() {
  const { state } = useCartlistContext();
  const { cartlist } = state;
  console.log(cartlist);
  return (
    <main className="grid-col-1 pc-grid-col-2--50-50 gap-mdm margin-top-sml">
      <div className="box-shadow-uni padding-mdm light-bg-color">
        <h3 className="fs-lrg">Price Details</h3>
        <hr />

        <div className="flex-spc-btwn">
          <h4>Price({`${cartlist.length} Items`})</h4>
          <h4>₹{cartlist?.reduce((acc, cv) => acc + cv.prevPrice, 0)}</h4>
        </div>
        <div className="flex-spc-btwn">
          <h4>Discount</h4>
          <h4 className="alert-primary">
            (₹
            {cartlist?.reduce((acc, cv) => acc + (cv.prevPrice - cv.price), 0)})
          </h4>
        </div>
        <hr />
        <div className="flex-spc-btwn">
          <h4>Total</h4>
          <h4>{cartlist?.reduce((acc, cv) => acc + cv.price, 0)}</h4>
        </div>
        <div className="flex-center">
          <button className="btn btn-cta btn-cta-anim btn-lrg">Checkout</button>
        </div>
        <div className="flex-center flex-wrap">
          <input
            name="coupon"
            className="form-input border-rad-none"
            id="coupon"
            required
            aria-required="true"
            autocomplete="off"
            type="text"
            placeholder="Apply Coupon"
          />
          <button className="btn alert-primary">Apply Coupon</button>
        </div>
      </div>
      {cartlist.length !== 0 &&
        cartlist.map((product) => {
          const { _id } = product;
          return <CartCard key={_id} product={product} />;
        })}
    </main>
  );
}

export default Cart;
