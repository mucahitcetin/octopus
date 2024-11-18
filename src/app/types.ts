export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  images: string[];
  rating: number;
};

export interface fetchProductsRes {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
