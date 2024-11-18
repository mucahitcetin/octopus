"use client";

import React, { useState, useEffect } from 'react';
import FilterSidebar from '@/app/components/FilterSidebar';
import ProductList from '@/app/components/ProductList';
import Pagination from '@/app/components/Pagination';
import { fetchProducts } from '@/app/services/product';

const ProductListPage = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 9;

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const fetchedProducts = await fetchProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Ürünler yüklenirken bir hata oluştu:", error);
            }
        };

        loadProducts();
    }, []);

    const startIndex = currentPage * itemsPerPage;
    const selectedProducts = products.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 py-6">
            {/* Kategoriler */}
            <div className="lg:col-span-1 lg:justify-center lg:flex">
                <FilterSidebar />
            </div>

            {/* Ürün Listesi */}
            <div className="lg:col-span-3">
                <h2 className="text-lg font-bold mb-4">Ürün Listesi</h2>
                <ProductList products={selectedProducts} />
                <Pagination
                    pageCount={Math.ceil(products.length / itemsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ProductListPage;

