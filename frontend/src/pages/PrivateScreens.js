import React from "react";
import { Outlet } from "react-router";
import { Header, Footer } from "../components/index";

const PrivateScreens = () => {
  return (
    <div className="priavet-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PrivateScreens;
