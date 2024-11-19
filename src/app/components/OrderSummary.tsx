import { ProductDetail } from "../types";
import BasketButton from "./BasketButton";

interface Props {
  product: ProductDetail;
}

const OrderSummary = ({ product }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t flex items-center justify-between p-6 shadow-md">
      <div className="flex items-center">
        <h4 className="font-bold text-lg text-gray-900 whitespace-nowrap">
          Sipariş Özeti
        </h4>
        <div className="border-l-2 border-gray-300 h-10 mx-4"></div>
        <div>
          <h4 className="font-semibold text-black">{product.title}</h4>
          <p className="text-gray-500 text-sm hidden lg:block">{product.description}</p>
        </div>
      </div>
      <div className="text-right flex items-center space-x-5">
        <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
        <BasketButton id={product.id} />
      </div>
    </div>
  );
};

export default OrderSummary;
