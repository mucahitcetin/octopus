import axios from "axios";
import { fetchProductsRes, ProductDetail } from "../types";

const base = "https://dummyjson.com";

type Params = { page?: string; search?: string; category?: string } | undefined;

export const fetchProducts = async (params: Params): Promise<fetchProductsRes> => {
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
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  const data = await response.json();

  return data;
};

export const fetchProductById = async (id: number): Promise<ProductDetail> => {
  const response = await fetch(`${base}/products/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product by ID ${id}: ${response.statusText}`);
  }

  const data = await response.json();

  return data;
};

export const addToCart = async (product: { id: number; quantity: number }) => {
  const response = await fetch(`${base}/carts/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      merge: true,
      products: [product],
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to add product to cart: ${response.statusText}`);
  }

  const data = await response.json();

  return data;
};

export const login = async (username: string, password: string) => {

    const res = await axios.post(
      `${base}/auth/login`,
      { username, password, expiresInMins: 30 },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log(res)
    if (!res.status==false){
      throw new Error( "Login failed.");
    }
    return res.data;
};

export const getUser = async (token: string) => {
  const response = await fetch(`${base}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorMessage = `Failed to fetch user: ${response.statusText}`;
    throw new Error(errorMessage);
  }

  const data = await response.json();
  return data;
};
