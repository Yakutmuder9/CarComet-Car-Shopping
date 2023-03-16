import { Header, Footer } from "../components/index";
import Search from "../components/Search";
import { BiChevronLeft, BiChevronRight, BiMenuAltLeft } from "react-icons/bi";
import SideNav from "../components/SideNav";
import FilteredCar from "../components/FilteredCar";
import { useState } from "react";

const Shop = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="shop-page">
      <div className="first-view">
        <Header />
        <Search />
      </div>
      <div className="filter-toggler">
        <div className="container">
          <div className="toggler" onClick={handleShow}>
            <BiMenuAltLeft /> <span>Filter</span>
          </div>

          <div className={!show ? "modal closed" : "modal open"} id="modal">
            <div className="header">
              <p><BiMenuAltLeft /> Filter</p>
              <span onClick={handleShow}>
                <BiChevronLeft /> 
              </span>
            </div>

            <div class="content">
              <SideNav />
            </div>

            <div class="footer">
              <button class="toggle-button">OK</button>
            </div>
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
          <div className="sideNav">
          <SideNav />

          </div>
          <FilteredCar />
        </div>
      </div>

      <div className="third-view"></div>
      <div className="fourth-view"></div>
      <Footer />
    </div>
  );
};

export default Shop;
