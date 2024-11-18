import Image from "next/image";

interface ProductColorProps {
    selectedColor: string;
    onSelectColor: (color: string) => void;
}

const ProductColor = ({ selectedColor, onSelectColor }: ProductColorProps) => (
    <div className="space-y-2">
        <h3 className="font-bold text-lg">Renk Seç:</h3>
        <div className="flex items-center space-x-6">
            {["Silver", "Black"].map((color) => (
                <div
                    key={color}
                    onClick={() => onSelectColor(color)}
                    className={`flex items-center justify-between w-[140px] h-[50px] border-2 rounded-md px-4 ${selectedColor === color ? "border-black" : "border-gray-300"
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
);

export default ProductColor;
