"use client";

import { useRouter } from "next/navigation";

const Error = ({ message }: { message: string }) => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold text-red-500 mb-4">{message}</h1>
            <button
                className="px-6 py-3 bg-blue-500 text-white rounded-md"
                onClick={() => router.push("/")}
            >
                Ana Sayfaya Dön
            </button>
        </div>
    );
};

export default Error;
