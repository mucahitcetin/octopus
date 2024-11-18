"use client";

import Image from "next/image";
import { useState } from "react";
import { login } from "@/app/services/auth";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

const LoginPage = ({ setIsLoggedIn }: { setIsLoggedIn: (value: boolean) => void }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await login(username, password);
            console.log("Login Successful:", response);
            setIsLoggedIn(true);
            router.push("/product-list");
        } catch (error) {
            setError("Invalid credentials.");
            console.error("Login Failed:", error);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Sol Kısım */}
            <div className="flex flex-col bg-[#F8FAFC] w-full lg:w-3/5 p-8 lg:p-12 relative items-center justify-center">
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
                    className="mt-10"
                />
                {/* Alt Yazılar */}
                <div className="">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Let Free Your Creativity with Our Intuitive Content Creator
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        No design degree is required! Effortlessly craft and design stunning and captivating
                        content using our user-friendly creative editor. With our drag-and-drop technology, anyone can
                        create amazing marketing materials in.
                    </p>
                </div>
            </div>

            {/* Sağ Kısım */}
            <div className="flex flex-col bg-white justify-center w-full lg:w-2/5 p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Welcome Octopus!</h2>
                <p className="text-gray-600 mb-8 text-center">Manage your smart signage, watch your company grow.</p>

                <form className="space-y-6 w-5/6 mx-auto p-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            E-mail Address*
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your e-mail address"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password*
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-4 flex items-center text-gray-400 focus:outline-none"
                            >
                                <Image
                                    src={showPassword ? "/icons/unlock.svg" : "/icons/lock.svg"}
                                    alt={showPassword ? "Unlock" : "Lock"}
                                    layout="intrinsic"
                                    width={20}
                                    height={20}
                                />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            className="h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                        />
                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-800">
                            Remember me?
                        </label>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button text="Login" className="w-full py-3 bg-green-500 text-white font-bold rounded-md" />
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
