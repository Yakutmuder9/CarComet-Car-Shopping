import React from "react";
import { Header, Footer } from "../components/index";
import Search from "../components/Search";

const Shop = () => {
  return (
    <div className="shop-page">
      <div className="first-view">
        <Header />
        <Search />
      </div>
      <div className="second-view"></div>
      <div className="third-view"></div>
      <div className="fourth-view"></div>
      <Footer />
    </div>
  );
};

export default Shop;
