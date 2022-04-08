import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useProducts } from "../../global-context/product-context";
import ProductCard from "../../ProductCard/ProductCard";
import {
  getSortedPrice,
  getFilteredData,
  minPrice,
  maxPrice,
} from "../../utils/util-products";

const Products = () => {
  const location = useLocation();
  const [displayFiltersMob, setDisplayFiltersMob] = useState(false);

  useEffect(() => {
    if (location.state) {
      dispatch({
        type: "SELECTED_CATEGORY",
        payload: location.state.selectedCategory,
      });
      return () =>
        dispatch({
          type: "UNSELECT_CATEGORY",
          payload: location.state.selectedCategory,
        });
    }
  }, []);

  const { state, dispatch, ACTIONS } = useProducts();
  const { products, filters } = state;
  const { sortItemsBy, priceRange, categories, ratingRange, includeUpcoming } =
    filters;

  const sortedData = getSortedPrice(products, sortItemsBy);

  const filteredData = getFilteredData(
    sortedData,
    priceRange,
    categories,
    ratingRange,
    includeUpcoming
  );
  const getUniqueCategory = (data) =>
    data.reduce(
      (acc, cv) =>
        !acc.includes(cv.categoryName) ? [...acc, cv.categoryName] : acc,
      []
    );

  return (
    <main className="pc-grid-col-2-20-80">
      <div
        className={`flex-center margin-sml ${
          displayFiltersMob ? "display-none" : ""
        } pc-display-none `}
      >
        <button title="Filters" onClick={() => setDisplayFiltersMob(true)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <aside
        className={`pos-fix-left padding-mdm flex-column filters ${
          displayFiltersMob ? "" : "mob-tab-display-none"
        }`}
      >
        <div className={`flex-f-end pc-display-none`}>
          <button
            className="red-txt"
            title="Close Tab"
            onClick={() => setDisplayFiltersMob(false)}
          >
            <i className="fas fa-times-circle"></i>
          </button>
        </div>
        <div className="flex-spc-btwn">
          <h2 className="fs-mdm">Filters</h2>
          <button
            className="danger-txt-hover"
            onClick={() => dispatch({ type: ACTIONS.CLEAR_FILTERS })}
          >
            Clear
          </button>
        </div>
        <div>
          <h3 className="fs-mdm">Price</h3>
          <div className="price-slider-container">
            <ul className="flex-column gap-lrg">
              <li>
                <input
                  type="radio"
                  className="input-radio"
                  name="rating-select"
                  id="price-low-to-high"
                  value="price-low-to-high"
                  onChange={() =>
                    dispatch({
                      type: ACTIONS.SORT,
                      payload: "PRICE_LOW_TO_HIGH",
                    })
                  }
                />
                <label htmlFor="price-low-to-high">Low to High</label>
              </li>
              <li>
                <input
                  type="radio"
                  className="input-radio"
                  name="rating-select"
                  id="price-high-to-low"
                  value="price-high-to-low"
                  onChange={() =>
                    dispatch({
                      type: ACTIONS.SORT,
                      payload: "PRICE_HIGH_TO_LOW",
                    })
                  }
                />
                <label htmlFor="price-high-to-low">High to Low</label>
              </li>
              <li>
                <ul className="flex-spc-btwn">
                  <li>{sortedData.length !== 0 ? minPrice(sortedData) : ""}</li>
                  <li>
                    {sortedData.length !== 0
                      ? (maxPrice(sortedData) + minPrice(sortedData)) / 2
                      : ""}
                  </li>
                  <li>{sortedData.length !== 0 ? maxPrice(sortedData) : ""}</li>
                </ul>
                <input
                  type="range"
                  className="slider"
                  onChange={(e) =>
                    dispatch({
                      type: ACTIONS.PRICE,
                      payload: Number(e.target.value),
                    })
                  }
                  value={priceRange}
                  min={sortedData.length !== 0 ? minPrice(sortedData) : 0}
                  max={sortedData.length !== 0 ? maxPrice(sortedData) : 100}
                  step="50"
                />
                <span className="flex-center">
                  {priceRange === 0 ? "-" : "₹ " + priceRange}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="fs-mdm">Category</h3>
          <ul className="flex-column">
            {getUniqueCategory(sortedData).map((category, index) => {
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    className="input-checkbox"
                    name={"online-" + category}
                    id={"online-" + category}
                    checked={filters.categories.includes(category)}
                    value={category}
                    onChange={(e) =>
                      dispatch({
                        type: ACTIONS.CATEGORY,
                        payload: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor={"online-" + category}
                    className="user-select-none"
                  >
                    {category}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="fs-mdm">Rating</h3>
          <div className="flex-column">
            <input
              name="price-range"
              id="price-range"
              type="range"
              className="slider"
              min="1"
              max="5"
              value={ratingRange}
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.RATING,
                  payload: Number(e.target.value),
                })
              }
            />
            <label htmlFor="price-range" className="flex-center">
              {ratingRange}
              <i className="fas fa-star rating-positive"></i>
            </label>
          </div>
        </div>
        <div>
          <h3 className="fs-mdm">Others </h3>
          <ul className="flex-column">
            <li>
              <input
                type="checkbox"
                className="input-checkbox"
                name="is-upcoming"
                id="is-upcoming"
                checked={includeUpcoming}
                onChange={(e) =>
                  dispatch({
                    type: ACTIONS.KEEP_UPCOMING,
                  })
                }
              />
              <label htmlFor="is-upcoming">Include Upcoming </label>
            </li>
          </ul>
        </div>
      </aside>
      <div>
        <h2 className="fs-mdm padding-sml">
          Showing
          <span className="card-subtitle fs-sml"> {filteredData.length} </span>
          out of
          <span className="card-subtitle fs-sml"> {products.length} </span>
          courses
        </h2>
        <div className="grid-min-col-1 grid-center margin-mdm pc-grid-col-4 flex-gap-lrg padding-mdm">
          {filteredData.map((product) => {
            const { _id } = product;
            return <ProductCard product={product} key={_id} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Products;
