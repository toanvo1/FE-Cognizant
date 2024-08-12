import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./Style/Footer.css";
import { Link } from "react-router-dom";
import FooterMenu from "./FooterMenu";
function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="header-footer">
          <div className="header-footer-inner">
            <div className="container">
              <div className="container-inner">
                <div className="innner-left">
                  <Link to="">
                    <div className="icon">
                      <FontAwesomeIcon icon={faInstagram} fontSize={"30px"} />
                    </div>
                  </Link>
                  <Link to="">
                    <div className="icon">
                      <FontAwesomeIcon icon={faX} fontSize={"30px"} />
                    </div>
                  </Link>
                  <Link to="">
                    <div className="icon">
                      <FontAwesomeIcon icon={faFacebook} fontSize={"30px"} />
                    </div>
                  </Link>
                  <Link to="">
                    <div className="icon">
                      <FontAwesomeIcon icon={faYoutube} fontSize={"30px"} />
                    </div>
                  </Link>
                </div>
                <div className="innner-right">
                  <ul>
                    <li>Sitemap</li>
                    <li>Terms</li>
                    <li>Privacy Notice</li>
                    <li>Notice Cookie</li>
                    <li>©2024 Cognizant, all rights reserved</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <FooterMenu />
        {/*  */}
      </div>
    </div>
  );
}

export default Footer;
