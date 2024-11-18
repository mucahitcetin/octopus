import axios from 'axios';

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      'https://dummyjson.com/auth/login',
      {
        username,
        password,
        expiresInMins: 30,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed.');
  }
};
