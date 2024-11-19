import Image from "next/image";
import Form from "@/app/components/Form";

const LoginPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sol Kısım */}
      <div className="flex flex-col bg-gray-50 w-full lg:w-3/5 p-8 lg:p-12 relative items-center justify-center">
        {/* Logo */}
        <div className="absolute top-4 left-8">
          <Image
            src="/images/login-logo.svg"
            alt="Octopus Logo"
            width={234.79}
            height={46.01}
          />
        </div>
        {/* Orta Resim */}
        <Image
          src="/images/login-hero.svg"
          alt="Login Hero"
          layout="intrinsic"
          width={411}
          height={411}
        />
        {/* Alt Yazılar */}
        <div className="px-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Let Free Your Creativity with Our Intuitive Content Creator
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            No design degree is required! Effortlessly craft and design stunning and
            captivating content using our user-friendly creative editor. With our
            drag-and-drop technology, anyone can create amazing marketing materials in.
          </p>
        </div>
      </div>

      {/* Sağ Kısım */}
      <div className="flex flex-col justify-center w-full lg:w-2/5 p-8 lg:p-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Welcome Octopus!
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Manage your smart signage, watch your company grow.
        </p>

        <Form />
      </div>
    </div>
  );
};

export default LoginPage;
