import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../assets/images/Logo.png";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
                <a href="shop">Car for Sells</a>
              </li>
              <li>
                <a href="sell">Sell Your Car</a>
              </li>
              <li>
                <a href="finance">Finance</a>
              </li>
              <li>
                <a href="saved">Saved Cars</a>
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
          {/* <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" checked="true" />
            <div className="slider round"></div>
          </label> */}
          <button className="button" onClick={toggleTheme}>
            {theme === "light" ? "Light mode" : "Dark mode"}
          </button>
          <div className="location">
            <i className="fa fa-location"></i>

            <div className="">
              <p> Near Store for 21229</p>
              <h5>Ellicot City</h5>
            </div>
          </div>
          <div className="acccount">
            <i className="fa fa-user"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
