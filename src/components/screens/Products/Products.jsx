import React from "react";

const Products = () => {
  return (
    <main class="pc-grid-col-2-20-80">
      <aside class="pos-fix-left padding-mdm flex-column filters">
        <div class="flex-spc-btwn">
          <h2 class="fs-mdm">Filters</h2>
          <button class="danger-txt-hover">Clear</button>
        </div>
        <div>
          <h3 class="fs-mdm">Price</h3>
          <div class="price-slider-container">
            <ul class="flex-spc-btwn">
              <li>50</li>
              <li>150</li>
              <li>200</li>
            </ul>
            <input type="range" class="slider" min="0" max="100" />
          </div>
        </div>

        <div>
          <h3 class="fs-mdm">Category</h3>
          <ul class="flex-column">
            <li>
              <input
                type="checkbox"
                class="input-checkbox"
                name="online-business"
                id="online-business"
              />
              <label for="online-business">Online Business</label>
            </li>
            <li>
              <input
                type="checkbox"
                class="input-checkbox"
                name="Entrepreneurship"
                id="Entrepreneurship"
              />
              <label for="Entrepreneurship">Entrepreneurship</label>
            </li>
            <li>
              <input
                type="checkbox"
                class="input-checkbox"
                name="Dropshipping"
                id="Dropshipping"
              />
              <label for="Dropshipping">Dropshipping</label>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="fs-mdm">Rating</h3>
          <ul class="flex-column">
            <li>
              <input
                type="radio"
                class="input-radio"
                name="rating-select"
                id="four-stars-plus"
                value="four-stars-plus"
              />
              <label for="four-stars-plus">4 Stars & above</label>
            </li>
            <li>
              <input
                type="radio"
                class="input-radio"
                name="rating-select"
                id="three-stars-plus"
                value="three-stars-plus"
              />
              <label for="three-stars-plus">3 Stars & above</label>
            </li>
            <li>
              <input
                type="radio"
                class="input-radio"
                name="rating-select"
                id="two-stars-plus"
                value="three-stars-plus"
              />
              <label for="two-stars-plus">2 Stars & above</label>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="fs-mdm">Rating</h3>
          <ul class="flex-column">
            <li>
              <input
                type="radio"
                class="input-radio"
                name="price-select"
                id="High-to-Low"
                value="High-to-Low"
              />
              <label for="High-to-Low">High to Low</label>
            </li>
            <li>
              <input
                type="radio"
                class="input-radio"
                name="price-select"
                id="Low-to-High"
                value="Low-to-High"
              />
              <label for="Low-to-High">Low to High</label>
            </li>
          </ul>
        </div>
      </aside>
      <div>
        <h2 class="fs-mdm padding-sml">
          Showing all the products
          <span class="card-subtitle fs-sml"> (20)</span>
        </h2>
        <div class="grid-min-col-1 grid-center margin-mdm pc-grid-col-4 flex-gap-lrg padding-mdm">
          <div class="curved-border flex-column box-shadow-uni">
            <div class="image-container">
              <img
                class="image-resp curved-border-top"
                src="./assets/dane-denear-image.jpg"
                alt="dan denear image"
              />

              <div class="overlay-wrapper curved-border-top fs-lrg">
                <a href="#" class="btn-icon-outlined">
                  <i class="fas fa-play"></i>
                </a>
              </div>
              <button class="pos-abs-top-right-custom fs-mdm border-radius-100">
                <span class="light-txt">
                  <i class="far fa-heart"></i>
                </span>
              </button>
            </div>
            <div class="text-align-center">
              <h2 class="headline-typography">Remote Team Management</h2>
              <h3 class="card-subtitle">
                By Dane Denear <span class="margin-sml"> |2.5 hours|</span>
              </h3>
              <p>
                <span class="heading-strong">₹1,500</span>
                <span class="heading-light strike">₹3,000</span>
              </p>

              <div class="flex-center">
                <button class="btn btn-cta light-text-color btn-wide margin-none border-rad-none">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div class="curved-border flex-column box-shadow-uni">
            <div class="image-container">
              <img
                class="image-resp curved-border-top"
                src="./assets/dane-denear-image.jpg"
                alt="dan denear image"
              />

              <div class="overlay-wrapper curved-border-top fs-lrg">
                <a href="#" class="btn-icon-outlined">
                  <i class="fas fa-play"></i>
                </a>
              </div>
              <button class="pos-abs-top-right-custom fs-mdm border-radius-100">
                <span class="light-txt">
                  <i class="far fa-heart"></i>
                </span>
              </button>
            </div>
            <div class="text-align-center">
              <h2 class="headline-typography">Remote Team Management</h2>
              <h3 class="card-subtitle">
                By Dane Denear <span class="margin-sml"> |2.5 hours|</span>
              </h3>
              <p>
                <span class="heading-strong">₹1,500</span>
              </p>

              <div class="flex-center">
                <button class="btn btn-cta light-text-color btn-wide margin-none border-rad-none">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div class="curved-border flex-column box-shadow-uni">
            <div class="image-container">
              <img
                class="image-resp curved-border-top"
                src="./assets/dane-denear-image.jpg"
                alt="dan denear image"
              />

              <div class="overlay-wrapper curved-border-top fs-lrg">
                <a href="#" class="btn-icon-outlined">
                  <i class="fas fa-play"></i>
                </a>
              </div>
              <button class="pos-abs-top-right-custom fs-mdm border-radius-100">
                <span class="light-txt">
                  <i class="far fa-heart"></i>
                </span>
              </button>
            </div>
            <div class="text-align-center">
              <h2 class="headline-typography">Remote Team Management</h2>
              <h3 class="card-subtitle">
                By Dane Denear <span class="margin-sml"> |2.5 hours|</span>
              </h3>
              <p>
                <span class="heading-strong">₹1,500</span>
              </p>

              <div class="flex-center">
                <button class="btn btn-cta light-text-color btn-wide margin-none border-rad-none">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div class="curved-border flex-column box-shadow-uni">
            <div class="image-container">
              <img
                class="image-resp curved-border-top"
                src="./assets/dane-denear-image.jpg"
                alt="dan denear image"
              />

              <div class="overlay-wrapper curved-border-top fs-lrg">
                <a href="#" class="btn-icon-outlined">
                  <i class="fas fa-play"></i>
                </a>
              </div>
              <button class="pos-abs-top-right-custom fs-mdm border-radius-100">
                <span class="light-txt">
                  <i class="far fa-heart"></i>
                </span>
              </button>
            </div>
            <div class="text-align-center">
              <h2 class="headline-typography">Remote Team Management</h2>
              <h3 class="card-subtitle">
                By Dane Denear <span class="margin-sml"> |2.5 hours|</span>
              </h3>
              <p>
                <span class="heading-strong">₹1,500</span>
              </p>

              <div class="flex-center">
                <button class="btn btn-cta light-text-color btn-wide margin-none border-rad-none">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div class="curved-border flex-column box-shadow-uni">
            <div class="image-container">
              <img
                class="image-resp curved-border-top"
                src="./assets/dane-denear-image.jpg"
                alt="dan denear image"
              />

              <div class="overlay-wrapper curved-border-top fs-lrg">
                <a href="#" class="btn-icon-outlined">
                  <i class="fas fa-play"></i>
                </a>
              </div>
              <button class="pos-abs-top-right-custom fs-mdm border-radius-100">
                <span class="red-txt">
                  <i class="fas fa-heart"></i>
                </span>
              </button>
            </div>
            <div class="text-align-center">
              <h2 class="headline-typography">Remote Team Management</h2>
              <h3 class="card-subtitle">
                By Dane Denear <span class="margin-sml"> |2.5 hours|</span>
              </h3>
              <p>
                <span class="heading-strong">₹1,500</span>
              </p>

              <div class="flex-center">
                <button class="btn btn-outlined btn-wide margin-none border-rad-none">
                  <a href="./../cart-page/index.html">Go to Cart</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
