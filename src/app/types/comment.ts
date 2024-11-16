import axios from 'axios';

export const fetchComments = async (productId: number) => {
  const response = await axios.get(`https://dummyjson.com/comments/${productId}`);
  return response.data;
};
