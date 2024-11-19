"use client";
import { addToCart } from "../api";
import Button from "./Button";

const BasketButton = ({ id }: { id: number }) => {
  const handleBasket = () => {
    const basketItem = {
      id: id,
      quantity: 1,
    };

    addToCart(basketItem).then(() => alert("Product added to basket"));
  };

  return (
    <div>
      <Button
        onClick={handleBasket}
        text="Sepete Ekle"
        className="px-6 py-3 bg-[#00B500] text-white font-semibold rounded-md whitespace-nowrap"
      />
    </div>
  );
};

export default BasketButton;
