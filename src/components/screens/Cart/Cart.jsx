import React from "react";
import { useCartlistContext } from "../../global-context/cart-context";
import CartCard from "./CartCard";

function Cart() {
  const { state } = useCartlistContext();
  const { cartlist } = state;

  return cartlist.length !== 0 ? (
    <main className="grid-col-1 pc-grid-col-2--50-50 gap-mdm margin-top-sml pc-height-100vh">
      <div className="box-shadow-uni padding-mdm light-bg-color">
        <h3 className="fs-lrg">Price Details</h3>
        <hr />

        <div className="flex-spc-btwn">
          <h4>
            Price(
            {`${cartlist.length} ${cartlist.length <= 1 ? "Item" : "Items"}`})
          </h4>
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
          <h4>₹ {cartlist?.reduce((acc, cv) => acc + cv.price, 0)}</h4>
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
            autoComplete="off"
            type="text"
            placeholder="Apply Coupon"
          />
          <button className="btn alert-primary">Apply Coupon</button>
        </div>
      </div>
      <div className="flex-wrap flex-center gap-mdm overflow-y-scroll">
        {cartlist.length !== 0 &&
          cartlist.map((product) => {
            const { _id } = product;
            return <CartCard key={_id} product={product} />;
          })}
      </div>
    </main>
  ) : (
    <main className="flex-center">
      <div className="text-align-center">
        <p className="fs-lrg ">Nothing to show here</p>
        <p className="fs-lrg">🗑️</p>
      </div>
    </main>
  );
}

export default Cart;
