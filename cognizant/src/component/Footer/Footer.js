import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-primary">
        <div className="footer-primary-text">
          <div className="row align-items-center justify-content-md-between">
              <div className="col-12 col-md-auto mb-3 mb-md-0">
                <Link to="#" aria-label="LinkedIn" className="social-icon">
                  <span className="visually-hidden">LinkedIn</span>
                </Link>
                <Link to="#" aria-label="Twitter" className="social-icon">
                  <span className="visually-hidden">Twitter</span>
                </Link>
                <Link to="#" aria-label="Facebook" className="social-icon">
                  <span className="visually-hidden">Facebook</span>
                </Link>
                <Link to="#" aria-label="Instagram" className="social-icon">
                  <span className="visually-hidden">Instagram</span>
                </Link>
                <Link to="#" aria-label="YouTube" className="social-icon">
                  <span className="visually-hidden">YouTube</span>
                </Link>
              </div>
              <div className="col-12 col-md-7">
                <ul className="nav flex-column flex-md-row justify-content-md-end align-items-md-center m-0 small">
                  <li className="nav-item">
                    <Link to="#">Sitemap</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#">Terms</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#">Privacy Notice</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#">Cookie Notice</Link>
                  </li>
                  <li className="nav-item">
                    <p className="m-0 small">
                      <span>©2024 Cognizant, all rights reserved</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          </div>
            {/* chỗ này là tách */}
      <div className="footer-primary">
        <div className="row pt-3">
          <div className="col-12 col-md-9">
            <div className="row mb-3">
              <div className="col">
                <h6>Industries</h6>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-3">
              <div className="col">
                <ul className="list-unstyled">
                  <li><Link to="#">Automotive</Link></li>
                  <li><Link to="#">Banking</Link></li>
                  <li><Link to="#">Blue Economy</Link></li>
                  <li><Link to="#">Capital Markets</Link></li>
                  <li><Link to="#">Communications, Media & Technology</Link></li>
                  <li><Link to="#">Consumer Goods</Link></li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-unstyled">
                  <li><Link to="#">Education</Link></li>
                  <li><Link to="#">Healthcare</Link></li>
                  <li><Link to="#">Information Services</Link></li>
                  <li><Link to="#">Insurance</Link></li>
                  <li><Link to="#">Life Sciences</Link></li>
                  <li><Link to="#">Manufacturing</Link></li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-unstyled">
                  <li><Link to="#">Oil & Gas</Link></li>
                  <li><Link to="#">Retail</Link></li>
                  <li><Link to="#">Transportation & Logistics</Link></li>
                  <li><Link to="#">Travel & Hospitality</Link></li>
                  <li><Link to="#">Utilities</Link></li>
                </ul>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <h6>Services</h6>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-3">
              <div className="col">
                <ul className="list-unstyled">
                  <li><Link to="#">Application Services</Link></li>
                  <li><Link to="#">Artificial Intelligence</Link></li>
                  <li><Link to="#">Business Process Services</Link></li>
                  <li><Link to="#">Cloud Solutions</Link></li>
                  <li><Link to="#">Core Modernization</Link></li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-unstyled">
                  <li><Link to="#">Digital Strategy</Link></li>
                  <li><Link to="#">Enterprise Platform Services</Link></li>
                  <li><Link to="#">Experience</Link></li>
                  <li><Link to="#">Infrastructure Services</Link></li>
                  <li><Link to="#">Intelligent Process Automation</Link></li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-unstyled">
                  <li><Link to="#">Internet of Things</Link></li>
                  <li><Link to="#">Quality Engineering & Assurance</Link></li>
                  <li><Link to="#">Security</Link></li>
                  <li><Link to="#">Software Engineering</Link></li>
                  <li><Link to="#">Sustainability Services</Link></li>
                </ul>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <h6><Link to="#">Consulting</Link></h6>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <h6>Insights</h6>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-3">
              <div className="col">
                <ul className="list-unstyled">
                  <li><span className="fw-bold">Themes</span></li>
                  <li><Link to="#">Modern Business</Link></li>
                  <li><Link to="#">Sustainability and Resilience</Link></li>
                  <li><Link to="#">Tech to Watch</Link></li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-unstyled">
                  <li><span className="fw-bold">Research</span></li>
                  <li><Link to="#">Deep Green</Link></li>
                  <li><Link to="#">Future-Ready Cities</Link></li>
                  <li><Link to="#">Gen AI: New Work, New World</Link></li>
                  <li><Link to="#">The Future of Us</Link></li>
                  <li><Link to="#">The Future-Ready Business Benchmark</Link></li>
                  <li><Link to="#">The Metaverse</Link></li>
                  <li><Link to="#">Think like an AI-native business</Link></li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-unstyled">
                  <li><span className="fw-bold">Explore</span></li>
                  <li><Link to="#">Authors</Link></li>
                  <li><Link to="#">Blog</Link></li>
                  <li><Link to="#">Case Studies</Link></li>
                  <li><Link to="#">Insights</Link></li>
                  <li><Link to="#">Podcasts</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <h6><Link to="#">About Cognizant</Link></h6>
            <ul className="list-unstyled mb-3">
              <li><Link to="#">Annual Report</Link></li>
              <li><Link to="#">Awards & Accolades</Link></li>
              <li><Link to="#">Be.Cognizant</Link></li>
              <li><Link to="#">Board of Directors</Link></li>
              <li><Link to="#">Client Briefing Program</Link></li>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Corporate Governance</Link></li>
              <li><Link to="#">Culture & Values</Link></li>
              <li><Link to="#">Diversity & Inclusion</Link></li>
              <li><Link to="#">Leadership Team</Link></li>
              <li><Link to="#">News & Press Releases</Link></li>
              <li><Link to="#">Partnerships</Link></li>
              <li><Link to="#">Public Policy</Link></li>
              <li><Link to="#">Sponsorships</Link></li>
              <li><Link to="#">Sustainability and Corporate Citizenship</Link></li>
              <li><Link to="#">Talent Worldwide</Link></li>
              <li><Link to="#">World Economic Forum</Link></li>
            </ul>

            <h6><Link to="#">Glossary</Link></h6>
            <h6><Link to="#">Information for Suppliers</Link></h6>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
