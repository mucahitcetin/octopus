import axios from 'axios';

export const addToCart = async (cartId: number, products: any[]) => {
  const response = await axios.put(
    `https://dummyjson.com/carts/${cartId}`,
    { products }
  );
  return response.data;
};
