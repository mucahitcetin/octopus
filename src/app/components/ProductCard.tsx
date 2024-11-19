import Link from "next/link";
import Image from "next/image";
import { Product } from "../types";

const ProductCard = ({ id, title, category, price, images, rating }: Product) => {
  return (
    <Link href={`/product-detail/${id}`} passHref>
      <div className="border rounded-md shadow-md p-4 bg-white cursor-pointer hover:shadow-lg transition">
        <div className="relative w-full h-[164px] mb-4">
          <Image
            src={images[0]}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>

        <h3 className="text-black font-normal text-base mb-1">{title}</h3>

        <p className="text-gray-500 font-normal text-sm mb-2 capitalize">{category}</p>

        <p className="text-black font-bold text-lg mb-2">${price.toFixed(2)}</p>

        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={`text-lg ${index < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
                }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
