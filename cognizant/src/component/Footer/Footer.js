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
    <div>
      <div className="container">
        <div className="footer">
          <div className="header-footer">
            <div className="header-footer-inner">
              <div className="">
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
                      <li>
                        <Link className="none" to="">
                          Sitemap{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="none" to="">
                          Terms{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="none" to="">
                          Privacy Notice{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="none" to="">
                          Cookie Notice{" "}
                        </Link>
                      </li>
                      <li>©2024 Cognizant, all rights reserved</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          {/*  */}
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}

export default Footer;
