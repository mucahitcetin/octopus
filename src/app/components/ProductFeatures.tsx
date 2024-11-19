"use client";
import Image from "next/image";
import { useState } from "react";

const ProductFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Özellik Seç:</h3>
      <div className="grid grid-cols-2 gap-4">
        {["Ürün Özellik 1", "Ürün Özellik 2", "Ürün Özellik 3", "Ürün Özellik 4"].map(
          (feature, index) => (
            <div
              key={index}
              onClick={() => setSelectedFeature(index)}
              className={`border rounded-md p-4 cursor-pointer ${
                selectedFeature === index ? "border-black bg-gray-100" : ""
              } relative`}
            >
              <p className="font-bold">{feature}</p>
              <p className="text-sm text-gray-500">Lorem Ipsum Dolor Sit Amet</p>
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
          )
        )}
      </div>
    </div>
  );
};

export default ProductFeatures;
