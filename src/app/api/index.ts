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
  } catch (error) {
    console.error("API Hatası (fetchProducts):", error);
    throw new Error("Ürünler yüklenemedi.");
  }
};

export const fetchProductById = async (id: number): Promise<Product> => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("API Hatası (fetchProductById):", error);
    throw new Error(error.response?.data?.message || "Ürün detayları yüklenemedi.");
  }
};

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
      expiresInMins: 30,
    });

    return response.data;
  } catch (error: any) {
    console.error("API Hatası (login):", error.response?.data);
    throw new Error(error.response?.data?.message || "Giriş başarısız.");
  }
};


export const addToCart = async (cartId: number, products: any[]) => {
  try {
    const response = await api.put(`/carts/${cartId}`, { products });
    return response.data;
  } catch (error: any) {
    console.error("API Hatası (addToCart):", error);
    throw new Error(error.response?.data?.message || "Sepete ürün ekleme başarısız.");
  }
};
