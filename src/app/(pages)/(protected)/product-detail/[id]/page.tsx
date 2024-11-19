import { fetchProductById } from "@/app/api";
import ProductImageGallery from "@/app/components/ProductImageGallery";
import ProductDetails from "@/app/components/ProductDetails";
import ProductFeatures from "@/app/components/ProductFeatures";
import ProductColor from "@/app/components/ProductColor ";
import ProductReviews from "@/app/components/ProductReviews";
import OrderSummary from "@/app/components/OrderSummary";
import Button from "@/app/components/Button";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const ProductDetailPage = async ({ params }: Props) => {
  const id = Number((await params).id);
  const product = await fetchProductById(id);

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <div className="container mx-auto p-8 pb-[120px] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-8">
        <ProductImageGallery images={product.images} />
        <div className="space-y-6">
          <ProductDetails title={product.title} description={product.description} />

          <ProductColor />
          <ProductFeatures />

          <div className="mt-10">
            <ProductReviews reviews={product.reviews} />

            <Button
              text="Tümünü Gör"
              className="bg-[#1E293B] hover:bg-[#0B0B20] text-white font-semibold w-[150px] mt-6"
            />
          </div>
        </div>
      </div>

      <OrderSummary product={product} />
    </div>
  );
};

export default ProductDetailPage;
