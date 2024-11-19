"use client";

import { useState } from "react";
import Button from "./Button";
import { login } from "../api";
import Image from "next/image";
import { setToken } from "../serverActions";
import { useRouter } from "next/navigation";

const Form = () => {
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

      await setToken(response.accessToken);

      router.push("/products");
    } catch (error) {
      setError("Invalid credentials.");
      console.error("Login Failed:", error);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleLogin}>
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

      <Button
        text="Login"
        className="w-full py-3 bg-green-500 text-white font-bold rounded-md"
      />
    </form>
  );
};

export default Form;
