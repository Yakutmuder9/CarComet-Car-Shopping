import { Header, Footer } from "../components/index";
import Search from "../components/Search";
import { BiMenuAltLeft } from "react-icons/bi";
import SideNav from "../components/SideNav";
import FilteredCar from "../components/FilteredCar";
import { useState } from "react";

const Shop = () => {
  return (
    <div className="shop-page">
      <div className="first-view">
        <Header />
        <Search />
      </div>
      <div className="filter-toggler">
        <div className="container">
          <div className="toggler">
            <BiMenuAltLeft /> Filter
          </div>
          <div className="best-match">
            Best Match{"  "}
            {"  "}
            <select>
              <option value="Model">Higest Model</option>
              <option value="Model">Higest Price</option>
              <option value="Model">Higest Milage</option>
              <option value="Model">Lowest Milage</option>
              <option value="Model">Lowest Price</option>
              <option value="Model">Lowest Price</option>
              <option value="Model">Best Deal</option>
              <option value="Model">Nearest Location</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="second-view ">
        <div className="container">
        
          <SideNav />
          <FilteredCar />
        </div>
      </div>

      <div className="third-view">
      </div>
      <div className="fourth-view"></div>
      <Footer />
    </div>
  );
};

export default Shop;
