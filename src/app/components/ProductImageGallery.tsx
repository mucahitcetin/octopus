"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  images: string[];
}

const ProductImageGallery = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    images[0] || "/images/product-not-found.jpg"
  );

  return (
    <div>
      {/* Büyük Görsel */}
      <div className="w-[471px] h-[587px] bg-gray-100 rounded-md shadow-md overflow-hidden mx-auto flex items-center justify-center border border-blue-100">
        <Image
          src={selectedImage}
          alt="Selected Product"
          className="max-w-full max-h-full object-contain"
          width={471}
          height={587}
        />
      </div>

      {/* Küçük Görseller */}
      <div className="flex justify-center space-x-4 mt-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`w-[80px] h-[80px] bg-gray-200 rounded-md overflow-hidden cursor-pointer border-2 ${selectedImage === img
              ? "border-blue-500 opacity-100"
              : "border-gray-300 opacity-50"
              }`}
          >
            <Image
              src={img}
              alt={`Image ${index}`}
              className="w-full h-full object-cover"
              width={80}
              height={80}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
