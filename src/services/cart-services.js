import axios from "axios";

export const getCartlistService = async (encToken) => {
  try {
    if (encToken) {
      const response = await axios.get("/api/user/cart", {
        headers: { authorization: encToken },
      });

      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const addToCartlistService = async (product, encToken) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      { headers: { authorization: encToken } }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCartlistService = async (productId, token) => {
  try {
    const resp = await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: token },
    });

    return resp;
  } catch (error) {
    console.log(error);
  }
};
