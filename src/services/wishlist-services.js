import axios from "axios";

export const removeFromWishlistService = async (productId, token) => {
  try {
    const resp = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: { authorization: token },
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const addToWishlistService = async (product, token) => {
  try {
    const resp = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: { authorization: token },
      }
    );
    return resp;
  } catch (error) {
    console.log(error);
  }
};
