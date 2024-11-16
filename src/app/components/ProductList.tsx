import ProductCard from './ProductCard';

interface ProductListProps {
    products: {
        id: number;
        title: string;
        category: string;
        price: number;
        images: string;
        rating: number;
    }[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
