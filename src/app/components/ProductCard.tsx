import Link from 'next/link';

interface ProductCardProps {
    id: number;
    title: string;
    category: string;
    price: number;
    images: string;
    rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    title,
    category,
    price,
    images,
    rating,
}) => {
    return (
        <Link href={`/product-detail/${id}`} passHref>
            <div className="border rounded-md shadow-md p-4 bg-white cursor-pointer hover:shadow-lg transition">
                <img
                    src={images}
                    alt={title}
                    className="mb-4 object-contain w-full h-[164px]"
                />
                <h3 className="text-black font-normal text-base mb-1">{title}</h3>
                <p className="text-gray-500 font-normal text-sm mb-2 capitalize">{category}</p>
                <p className="text-black font-bold text-lg mb-2">${price.toFixed(2)}</p>
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <span
                            key={index}
                            className={`text-lg ${index < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
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
