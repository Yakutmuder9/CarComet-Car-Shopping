import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { appstore, googleplay } from "../assets/images/index";

const Footer = () => {
  
  return (
    <footer>
      <div className="container">
        <div className="logWithemail">
          <div className="foot-logo">
            <h2>Get Ready With CarComet</h2>
          </div>
          <div className="foot-email">
            <input placeholder="email address" />
            <button className="">Sign Up</button>
          </div>
        </div>
        <div className="socialWithSite">
          <div className="foot-social">
            <div className="social-media">
              <AiFillFacebook />
              <AiFillYoutube />
              <BsLinkedin />
              <AiFillTwitterSquare />
            </div>
            <div className="app-downlod">
              <h4>Download our app</h4>
              <br />
              <div className="download-icon">
                <img src={appstore} alt="" />
                <img src={googleplay} alt="" />
              </div>
            </div>
          </div>
          <div className="foot-site">
            <div className="site-links">
              <a href="#">About</a>
              <a href="#">Help</a>
              <a href="#">Contact Us</a>
              <a href="#">Accessabilty</a>
              <a href="#">Copyright</a>
              <a href="#">Advertisments</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="campany-copyright">
              <p>Copyright © 2023 CarComet Groups</p>
              <p>Devloped BY Yakut Ahmedin</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
