"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProductById } from "@/app/services/product";
import Button from "@/app/components/Button";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<any | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>("");

    useEffect(() => {
        const loadProduct = async () => {
            if (!id) return;
            try {
                const fetchedProduct = await fetchProductById(Number(id));
                setProduct(fetchedProduct);
                setSelectedImage(fetchedProduct.images[0]);
            } catch (error) {
                console.error("Ürün detayları alınırken hata:", error);
            }
        };

        loadProduct();
    }, [id]);

    if (!product) {
        return <div>Ürün yükleniyor...</div>;
    }

    return (
        <div className="container mx-auto p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Sol Alan: Görseller */}
                <div>
                    {/* Büyük Görsel */}
                    <div
                        className="w-[471px] h-[587px] bg-gray-100 rounded-md shadow-md overflow-hidden mx-auto flex items-center justify-center"
                        style={{ backgroundColor: "#F2F2F2" }}
                    >
                        <img
                            src={selectedImage}
                            alt={product.title}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>

                    {/* Küçük Görseller */}
                    <div className="flex justify-center space-x-4 mt-4">
                        {Array(3)
                            .fill(product.images[0])
                            .map((img: string, index: number) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedImage(img)}
                                    className={`w-[80px] h-[80px] bg-gray-200 rounded-md overflow-hidden cursor-pointer border-2 ${selectedImage === img ? "border-black" : "border-transparent"
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`${product.title} ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                    </div>
                </div>

                {/* Sağ Alan: Detaylar */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                    </div>

                    {/* Renk Seçimi */}
                    <div className="space-y-2">
                        <h3 className="font-bold text-lg">Renk Seç:</h3>
                        <div className="flex items-center space-x-6">
                            {["Silver", "Black"].map((color, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-center w-[120px] h-[40px] border-2 rounded-md ${color === "Black" ? "border-black" : "border-gray-300"
                                        } cursor-pointer`}
                                >
                                    {color}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Özellik Seçimi */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Özellik Seç:</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {Array(4)
                                .fill("Ürün Özellik 1")
                                .map((feature, index) => (
                                    <button
                                        key={index}
                                        className="border rounded-md p-2 text-left hover:bg-gray-100 focus:border-black focus:outline-none disabled:opacity-50"
                                        disabled={index % 2 === 1}
                                    >
                                        <p className="font-bold">{feature}</p>
                                        <p className="text-sm text-gray-500">
                                            Lorem Ipsum Dolor Sit Amet
                                        </p>
                                    </button>
                                ))}
                        </div>
                    </div>

                    {/* Yorumlar */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Ürün Yorumları:</h3>
                        {product.reviews.slice(0, 2).map((review: any, index: number) => (
                            <div key={index} className="border-b pb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold">{review.reviewerName}</span>
                                    <span className="text-yellow-400">
                                        {Array(review.rating)
                                            .fill("★")
                                            .join("")}
                                    </span>
                                </div>
                                <p className="text-gray-600">
                                    {review.comment.slice(0, 80)}...
                                    <span className="text-green-500 ml-2 cursor-pointer">
                                        Daha fazla göster
                                    </span>
                                </p>
                            </div>
                        ))}
                        <button className="text-primary hover:underline">Tümünü Gör</button>
                    </div>
                </div>
            </div>

            {/* Alt Alan: Sipariş Özeti */}
            <div className="border-t mt-8 pt-4 flex justify-between items-center bg-gray-100 p-4 rounded-md">
                <div>
                    <h4 className="font-semibold">{product.title}</h4>
                    <p className="text-gray-500 text-sm">{product.description}</p>
                </div>
                <div className="text-right">
                    <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
                    <Button
                        text="Sepete Ekle"
                        className="mt-4 w-full h-[50px] bg-[#00B500] text-white font-semibold text-lg rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
