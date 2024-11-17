"use client";

import Image from "next/image";
import Button from "@/app/components/Button";

const LoginPage = () => {
    return (
        <div className="flex h-screen">
            {/* Sol Kısım */}
            <div className="flex flex-col items-center justify-center bg-gray-50 w-1/2 p-12">
                {/* Logo */}
                <Image
                    src="/images/login-logo.svg"
                    alt="Octopus Logo"
                    width={120}
                    height={50}
                    className="mb-12"
                />

                {/* Hero Görsel */}
                <Image
                    src="/images/login-hero.svg"
                    alt="Login Hero"
                    width={745}
                    height={727}
                    className="mb-8"
                />

                {/* Başlık ve Açıklama */}
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Let Free Your Creativity with Our Intuitive Content Creator
                    </h1>
                    <p className="text-gray-600">
                        No design degree is required! Effortlessly craft and design stunning and
                        captivating content using our user-friendly creative editor. With our
                        drag-and-drop technology, anyone can create amazing marketing materials in
                        minutes.
                    </p>
                </div>
            </div>

            {/* Sağ Kısım */}
            <div className="flex flex-col justify-center w-1/2 p-12">
                {/* Hoşgeldiniz Başlık */}
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Octopus!</h2>
                <p className="text-gray-600 mb-8">
                    Manage your smart signage, watch your company grow.
                </p>

                {/* Login Formu */}
                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            E-mail Address*
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your e-mail address"
                            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password*
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                                🔒
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember-me"
                            className="h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                        />
                        <label
                            htmlFor="remember-me"
                            className="ml-2 block text-sm text-gray-700"
                        >
                            Remember me?
                        </label>
                    </div>

                    {/* Giriş Butonu */}
                    <Button
                        text="Login"
                        className="w-full py-3 bg-green-500 text-white font-bold rounded-md"
                    />
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
