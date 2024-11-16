"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProductById } from "@/app/services/product";
import Button from "@/app/components/Button";
import Image from "next/image";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<any | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [selectedColor, setSelectedColor] = useState<string>("Silver");
    const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

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
        <div className="container mx-auto p-8 pb-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  pb-8" >
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
                                    className={`w-[80px] h-[80px] bg-gray-200 rounded-md overflow-hidden cursor-pointer border-2 ${index === 0
                                        ? "border-black opacity-100"
                                        : "border-gray-300 opacity-50"
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
                            {["Silver", "Black"].map((color) => (
                                <div
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`flex items-center justify-between w-[140px] h-[50px] border-2 rounded-md px-4 ${selectedColor === color
                                        ? "border-black"
                                        : "border-gray-300"
                                        } cursor-pointer relative`}
                                >
                                    <span
                                        className={`absolute w-4 h-4 rounded-full ${color === "Silver" ? "bg-gray-300" : "bg-black"
                                            }`}
                                        style={{
                                            left: "10px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                        }}
                                    ></span>
                                    <span className="ml-6 capitalize">{color}</span>
                                    {selectedColor === color && (
                                        <Image
                                            src="/icons/check.svg"
                                            alt="check"
                                            width={16}
                                            height={16}
                                            className="absolute right-2"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Özellik Seçimi */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Özellik Seç:</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Ürün Özellik 1",
                                "Ürün Özellik 2",
                                "Ürün Özellik 3",
                                "Ürün Özellik 4",
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedFeature(index)}
                                    className={`border rounded-md p-4 cursor-pointer ${selectedFeature === index
                                        ? "border-black bg-gray-100"
                                        : ""
                                        } relative`}
                                >
                                    <p className="font-bold">{feature}</p>
                                    <p className="text-sm text-gray-500">
                                        Lorem Ipsum Dolor Sit Amet
                                    </p>
                                    {selectedFeature === index && (
                                        <Image
                                            src="/icons/check.svg"
                                            alt="check"
                                            width={16}
                                            height={16}
                                            className="absolute top-2 right-2"
                                        />
                                    )}
                                </div>
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
                        <Button
                            text="Tümünü Gör"
                            className="bg-[#1E293B] hover:bg-[#0B0B20] text-white font-semibold w-[150px]"
                        />
                    </div>
                </div>
            </div>

            {/* Alt Alan: Sipariş Özeti */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t flex items-center justify-between p-6 shadow-md">
                <div className="flex items-center">
                    <h4 className="font-bold text-lg text-gray-900">Sipariş Özeti</h4>
                    <div className="border-l-2 border-gray-300 h-10 mx-4"></div>
                    <div>
                        <h4 className="font-semibold text-black">{product.title}</h4>
                        <p className="text-gray-500 text-sm hidden lg:block">
                            {product.description}
                        </p>
                    </div>
                </div>
                <div className="text-right flex items-center space-x-5">
                    <p className="text-3xl font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                    </p>
                    <Button
                        text="Sepete Ekle"
                        className="px-6 py-3 bg-[#00B500] text-white font-semibold rounded-md whitespace-nowrap"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
