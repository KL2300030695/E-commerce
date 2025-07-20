import axios from "axios";

const API_URL = "http://localhost:8080/api/cart";

const API_BASE = "http://localhost:8080/api/cart";

export const addToCart = async (userId, productId) => {
  return await axios.post(`${API_BASE}/add`, {
    userId,
    productId,
    quantity: 1
  });
};

export const getCartItems = async (userId) => {
  const response = await axios.get(`${API_BASE}/user/${userId}`);
  return response.data;
};

export const clearCart = async (userId) => {
  return await axios.delete(`${API_BASE}/clear/${userId}`);
};

// Remove Cart Item
export const removeCartItem = async (cartItemId) => {
    try {
        await axios.delete(`${API_URL}/remove/${cartItemId}`);
    } catch (error) {
        console.error("Error removing item from cart", error);
    }
};

