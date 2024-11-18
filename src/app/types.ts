export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  images: string[];
  rating: number;
  description:string;
  reviews: { reviewerName: string; rating: number; comment: string }[];
};

export interface fetchProductsRes {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
