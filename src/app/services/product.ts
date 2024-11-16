import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

export const fetchProducts = async () => {
    const response = await axios.get(`${BASE_URL}`);
    return response.data.products; 
};

export const fetchProductById = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};
