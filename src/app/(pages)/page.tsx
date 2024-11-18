"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import LoginPage from "./login/page";
import ProductListPage from "./product-list/page";
import ProductDetailPage from "./product-detail/[id]/page";
import Header from "../components/Header";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoggedIn && pathname !== "/") {
      router.push("/");
    }
  }, [isLoggedIn, pathname, router]);

  return (
    <div>
      {isLoggedIn && pathname !== "/" && <Header />}
      {isLoggedIn ? (
        <>
          {pathname === "/product-list" && <ProductListPage />}
          {pathname.startsWith("/product-detail") && <ProductDetailPage />}
        </>
      ) : (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default Home;
