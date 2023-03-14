import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../assets/images/Logo.png";
import { SlLocationPin } from "react-icons/sl";
import { FiUser } from "react-icons/fi";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsWideScreen(true);
      } else {
        setIsWideScreen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    <header>
      <div className="container">
        <div className="logo-with-links">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>

          <div className="nav-links">
            <ul>
              <li>
                <a href="shop">{isWideScreen ? "Car for Sells" : "Shop"}</a>
              </li>
              <li>
                <a href="sell">{isWideScreen ? "Sell Your Car" : "Sell"}</a>
              </li>
              <li>
                <a href="finance">Finance</a>
              </li>
              <li>
                <a href="saved">{isWideScreen ? "Saved Cars" : "Saved"}</a>
              </li>
              <li>
                <a href="">
                  More <i className="fa fa-down"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="account-locaion">
          <input type="checkbox" id="checkbox" onChange={toggleTheme} />
          <div className="location">
            <SlLocationPin  className="location-icon"/>
            <div className="zip-location">
              <p> Near Store for 21229</p>
              <h5>Ellicot City</h5>
            </div>
          </div>
          <div className="account">
            <FiUser />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
