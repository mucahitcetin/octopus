"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FilterSidebar from "@/app/components/FilterSidebar";
import ProductList from "@/app/components/ProductList";
import Pagination from "@/app/components/Pagination";
import Loader from "@/app/components/Loader";
import Error from "@/app/components/Error";
import { fetchProducts } from "@/app/api";
import { Product } from "@/app/types";


const ProductListPage = () => {
    const searchParams = useSearchParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            const page = searchParams.get("page") || "1";
            const search = searchParams.get("search") || "";
            const category = searchParams.get("category") || "";

            try {
                const data = await fetchProducts({ page, search, category });
                setProducts(data.products);
                setTotal(data.total);
            } catch (err) {
                setError("Ürünler yüklenirken bir hata oluştu.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchParams]);

    if (loading) return <Loader />;
    if (error) return <Error message={error} />;

    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 py-6 px-4">
            <div className="lg:col-span-1 lg:justify-center lg:flex ">
                <FilterSidebar />
            </div>
            <div className="lg:col-span-3 ">
                <h2 className="text-lg font-bold mb-4">Ürün Listesi</h2>
                <ProductList products={products} />
                <Pagination total={total} currentPage={Number(searchParams.get("page")) || 1} />
            </div>
        </div>
    );
};

export default ProductListPage;
