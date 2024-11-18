"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProductById } from "@/app/api";
import ProductImageGallery from "@/app/components/ProductImageGallery";
import ProductDetails from "@/app/components/ProductDetails";
import ProductFeatures from "@/app/components/ProductFeatures";
import ProductColor from "../../../components/ProductColor "
import ProductReviews from "@/app/components/ProductReviews";
import OrderSummary from "@/app/components/OrderSummary";
import Button from "@/app/components/Button";
import Loader from "@/app/components/Loader";
import Error from "@/app/components/Error";
import { Product } from "@/app/types";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [selectedColor, setSelectedColor] = useState<string>("Silver");
    const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProduct = async () => {
            setLoading(true);
            setError(null);

            if (!id) return;

            try {
                const fetchedProduct = await fetchProductById(Number(id));
                setProduct(fetchedProduct);
                setSelectedImage(fetchedProduct.images[0]);
            } catch (err) {
                setError("Ürün detayları alınırken bir hata oluştu.");
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [id]);

    if (loading) return <Loader />;
    if (error) return <Error message={error} />;

    if (!product) {
        return <div>Ürün bulunamadı.</div>;
    }

    return (
        <div className="container mx-auto p-8 pb-[120px] bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-8">
                <ProductImageGallery
                    images={product.images}
                    selectedImage={selectedImage}
                    onSelectImage={setSelectedImage}
                />
                <div className="space-y-6">
                    <ProductDetails
                        title={product.title}
                        description={product.description}
                    />
                    <ProductColor
                        selectedColor={selectedColor}
                        onSelectColor={setSelectedColor}
                    />
                    <ProductFeatures
                        selectedFeature={selectedFeature}
                        onSelectFeature={setSelectedFeature}
                    />
                    <div className="mt-10">
                        <ProductReviews reviews={product.reviews} />
                        <Button
                            text="Tümünü Gör"
                            className="bg-[#1E293B] hover:bg-[#0B0B20] text-white font-semibold w-[150px] mt-6"
                        />
                    </div>
                </div>
            </div>


            <OrderSummary
                title={product.title}
                description={product.description}
                price={product.price}
            />
        </div>
    );
};

export default ProductDetailPage;
