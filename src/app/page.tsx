"use client";

import { useState } from "react";
import LoginPage from "./login/page";
import ProductListPage from "./product-list/page";
import Header from "./components/Header";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn && <Header />}
      {isLoggedIn ? (
        <ProductListPage />
      ) : (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};

export default Home;
