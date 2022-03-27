import React from "react";

function Cart() {
  return (
    <main className="grid-col-1 pc-grid-col-2--50-50 gap-mdm margin-top-sml">
      <div className="box-shadow-uni padding-mdm light-bg-color">
        <h3 className="fs-lrg">Price Details</h3>
        <hr />

        <div className="flex-spc-btwn">
          <h4>Price(2 Items)</h4>
          <h4>₹12,000</h4>
        </div>
        <div className="flex-spc-btwn">
          <h4>Discount</h4>
          <h4 className="alert-primary">(₹6,000)</h4>
        </div>
        <hr />
        <div className="flex-spc-btwn">
          <h4>Total</h4>
          <h4>₹6,000</h4>
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
      <div className="light-bg-color">
        <div className="curved-border padding-sml box-shadow-uni">
          <div className="grid-col-2--50-50">
            <div className="curved-border">
              <div className="image-container">
                <img
                  className="image-resp curved-border-top"
                  src="../homepage/assets/joana-abreu-aFkzShngdaw-unsplash.jpg"
                  alt="Joana Abreau image"
                />
              </div>
            </div>
            <div className="flex-column padding-sml">
              <h2 className="headline-typography">
                Learn Hyperrealistic Sketching
              </h2>
              <h3 className="card-subtitle">By Joana Abreau</h3>
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
                <span className="fs-sml card-subtitle">4.0(300)</span>
              </div>

              <h4 className="fs-mdm">
                <span className="cta-text">
                  ₹3,000 <i className="fas fa-tag"></i>
                </span>
                <span className="fs-sml strike card-subtitle">₹6,000</span>
              </h4>
            </div>
          </div>
          <div className="flex-f-end">
            <button className="cta-text-hover">Move to Wishlist</button>
            <button className="danger-txt-hover">Remove</button>
          </div>
        </div>
        <div className="curved-border padding-sml box-shadow-uni">
          <div className="grid-col-2--50-50">
            <div className="curved-border">
              <div className="image-container">
                <img
                  className="image-resp curved-border-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT80a4Ic8sG2hF0j_CTzz5YueXgaqvjlUcv7Q&usqp=CAU"
                  alt="nick nice"
                />
              </div>
            </div>
            <div className="flex-column padding-sml">
              <h2 className="headline-typography">Photography Masterclass</h2>
              <h3 className="card-subtitle">By Nick Nice</h3>
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
                <span className="fs-sml card-subtitle">4.0(300)</span>
              </div>

              <h4 className="fs-mdm">
                <span className="cta-text">
                  ₹3,000 <i className="fas fa-tag"></i>
                </span>
                <span className="fs-sml strike card-subtitle">₹6,000</span>
              </h4>
            </div>
          </div>
          <div className="flex-f-end">
            <button className="cta-text-hover">Move to Wishlist</button>
            <button className="danger-txt-hover">Remove</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
