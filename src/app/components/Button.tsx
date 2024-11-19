"use client";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#00B500] text-white font-medium rounded-lg px-6 py-2.5 shadow-md hover:bg-[#009A45] focus:outline-none focus:ring-2 focus:ring-[#00B500] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
