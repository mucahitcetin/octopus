import axios from 'axios';

export const fetchProducts = async (limit: number, skip: number) => {
  const response = await axios.get(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  return response.data;
};

export const fetchProductById = async (id: number) => {
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  return response.data;
};
