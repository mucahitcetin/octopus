import Button from "./Button";

interface OrderSummaryProps {
    title: string;
    description: string;
    price: number;
}

const OrderSummary = ({ title, description, price }: OrderSummaryProps) => (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t flex items-center justify-between p-6 shadow-md">
        <div className="flex items-center">
            <h4 className="font-bold text-lg text-gray-900 whitespace-nowrap">Sipariş Özeti</h4>
            <div className="border-l-2 border-gray-300 h-10 mx-4"></div>
            <div>
                <h4 className="font-semibold text-black">{title}</h4>
                <p className="text-gray-500 text-sm hidden lg:block">{description}</p>
            </div>
        </div>
        <div className="text-right flex items-center space-x-5">
            <p className="text-3xl font-bold text-gray-900">${price.toFixed(2)}</p>
            <Button
                text="Sepete Ekle"
                className="px-6 py-3 bg-[#00B500] text-white font-semibold rounded-md whitespace-nowrap"
            />
        </div>
    </div>
);

export default OrderSummary;


