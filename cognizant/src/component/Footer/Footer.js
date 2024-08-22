import React from "react";
import FooterMenu from "./FooterMenu"; // Import FooterMenu component
import "./Style/Footer.css"; // Import Footer-specific styles
import FooterTop from "./FooterTop";

function Footer({ formData = {}, handleChange }) {
  return (
    <div>
      <div className="container">
        <div className="container-inner">
          <h2 className="title">Ready to accelerate your business?</h2>
          <p className="subtitle">We’re here to help and answer any questions you might have.</p>
          <div className="form-grid">
            <div className="form-column">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="+84 3345 9145"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Nhập Email"
                  required
                />
              </div>
            </div>

            <div className="form-column">
              <div className="form-group">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Organization*"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="position"
                  placeholder="Nhập chức danh"
                  required
                />
              </div>
              <div className="form-group">
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize || ""}
                  onChange={handleChange}
                  required
                >
                  <option value="">Chọn quy mô</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group full-width">
            <textarea
              id="request"
              name="request"
              placeholder="Message"
              required
            />
          </div>
          <div className="submit-button-container">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}

export default Footer;
