import FilterSidebar from "@/app/components/FilterSidebar";
import ProductList from "@/app/components/ProductList";
import Pagination from "@/app/components/Pagination";
import { fetchProducts } from "@/app/api";

type Props = {
  searchParams?: Promise<{
    page?: string;
    search?: string;
    category?: string;
  }>;
};

const ProductListPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const data = await fetchProducts(params);

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 py-6 max-md:p-4">
      {/* Kategoriler */}
      <div className="lg:col-span-1 lg:justify-center lg:flex">
        <FilterSidebar />
      </div>

      {/* Ürün Listesi */}
      <div className="lg:col-span-3">
        <h2 className="text-lg font-bold mb-4">Ürün Listesi</h2>
        <ProductList products={data.products} />
        <Pagination total={data.total} />
      </div>
    </div>
  );
};

export default ProductListPage;
