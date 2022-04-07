import React, { useEffect } from "react";
import axios from "axios";
import ProductCard from "../../ProductCard/ProductCard";
import { useWishlistContext } from "../../global-context/wishlist-context";
import { products } from "../../../backend/db/products";

function Wishlist() {
  const { state } = useWishlistContext();
  const { wishlist } = state;

  return wishlist.length != 0 ? (
    <main className="padding-lrg grid-center">
      <h1 className="text-align-center">
        <span className="cta-text">
          <i className="fas fa-heart"></i>
        </span>
        Wishlist
      </h1>
      <div className="grid-col-1 pc-grid-col-4 gap-lrg">
        {wishlist.length !== 0 &&
          wishlist.map((product) => {
            const { _id } = product;
            return <ProductCard key={_id} product={product} />;
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

export default Wishlist;
