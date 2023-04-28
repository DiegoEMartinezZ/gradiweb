import React from "react";
import { Banner } from "../components/banner/Banner";
import { MainTopBar } from "../components/main-top-bar/MainTopBar";
import { Footer } from "../components/footer/Footer";
import { Products } from "../components/products/Products";
import { ApiProvider } from "../api/ApiContext";

export const LandingPage = () => {
  return (
    <>
      <Banner />
      <MainTopBar />
      <ApiProvider>
        <Products />
      </ApiProvider>
      <Footer />
    </>
  );
};
