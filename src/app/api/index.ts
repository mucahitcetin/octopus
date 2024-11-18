import axios from "axios";
import { fetchProductsRes, Product } from "../types";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

const base = "https://dummyjson.com";

type Params = { page?: string; search?: string; category?: string } | undefined;

export const fetchProductById = async (id: number): Promise<Product> => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("API Hatası (fetchProductById):", error.response?.data);
      throw new Error(error.response?.data?.message || "Ürün detayları yüklenemedi.");
    }
    throw new Error("Beklenmeyen bir hata oluştu.");
  }
};

export const fetchProducts = async (params: Params): Promise<fetchProductsRes> => {
  try {
    const skip = (Number(params?.page || 1) - 1) * 9;
    let url = `${base}/products?limit=9&skip=${skip}`;

    if (params?.category) {
      url = `${base}/products/category/${encodeURIComponent(params.category)}`;
    } else if (params?.search) {
      url = `${base}/products/search?q=${encodeURIComponent(params.search)}`;
    }

    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Ürünler yüklenirken bir hata oluştu.");
    }

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    console.error("API Hatası (fetchProducts):", error);
    throw new Error("Ürünler yüklenemedi.");
  }
};


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
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Login failed.');
    }
    throw new Error('An unexpected error occurred.');
  }
};

export const addToCart = async (cartId: number, products: { id: number; quantity: number }[]) => {
  try {
    const response = await axios.put(`https://dummyjson.com/carts/${cartId}`, { products });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Adding to cart failed.');
    }
    throw new Error('An unexpected error occurred.');
  }
};

