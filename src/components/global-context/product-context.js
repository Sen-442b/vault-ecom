import React, { useEffect, useReducer, createContext, useContext } from "react";
import axios from "axios";
import { categories } from "../../backend/db/categories";

const ACTIONS = {
  GET_PRODUCTS: "GET_PRODUCTS",
  SORT: "SORT",
  PRICE: "PRICE",
  CATEGORY: "CATEGORY",
  CLEAR_FILTERS: "CLEAR_FILTERS",
  RATING: "RATING",
  KEEP_UPCOMING: "KEEP_UPCOMING",
};
const {
  GET_PRODUCTS,
  SORT,
  PRICE,
  CATEGORY,
  CLEAR_FILTERS,
  RATING,
  KEEP_UPCOMING,
} = ACTIONS;
const initItems = {
  products: [],
  filters: {
    sortItemsBy: "",
    includeUpcoming: false,
    priceRange: 0,
    ratingRange: 5,
    categories: [],
  },
};
const ProductContext = createContext();

const productReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };

    case SORT:
      return {
        ...state,
        filters: { ...state.filters, sortItemsBy: action.payload },
      };
    case PRICE:
      return {
        ...state,
        filters: { ...state.filters, priceRange: action.payload },
      };

    case CATEGORY:
      const categoryIncluded = state.filters.categories.includes(
        action.payload
      );
      return categoryIncluded
        ? {
            ...state,
            filters: {
              ...state.filters,
              categories: state.filters.categories.filter(
                (item) => item !== action.payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              categories: [...state.filters.categories, action.payload],
            },
          };

    case RATING:
      return {
        ...state,
        filters: { ...state.filters, ratingRange: action.payload },
      };

    case KEEP_UPCOMING:
      return {
        ...state,
        filters: {
          ...state.filters,
          includeUpcoming: !state.filters.includeUpcoming,
        },
      };
    case "SELECTED_CATEGORY":
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: action.payload
            ? [...state.filters.categories, action.payload]
            : [...state.filters.categories],
        },
      };
    case "UNSELECT_CATEGORY":
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: state.filters.categories.filter(
            (item) => item !== action.payload
          ),
        },
      };
    case CLEAR_FILTERS:
      return { ...state, filters: initItems.filters };
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initItems);

  const getProductsData = () => {
    (async () => {
      const resp = await axios.get("/api/products");

      dispatch({ type: ACTIONS.GET_PRODUCTS, payload: resp.data.products });
    })();
  };

  useEffect(() => getProductsData(), []);

  return (
    <ProductContext.Provider value={{ state, dispatch, ACTIONS }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductContextProvider, useProducts };
