import React from 'react';
import FooterMenu from './FooterMenu'; // Import FooterMenu component
import './Style/Footer.css'

function Footer({ formData = {}, handleChange }) {
  return (
    <div>
      <div className='container'>
        <div className="container-inner">
          <h2 className="title">Please Leave Your Information Below</h2>
          <p className="subtitle">To Match Your Business Goals</p>
          <div className="form-grid">
            <div className="col-5">
              <div className="footer-section">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleChange}
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName || ''}
                    onChange={handleChange}
                    placeholder="Nhập tên công ty"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber || ''}
                    onChange={handleChange}
                    placeholder="+84 3345 9145"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="footer-section">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleChange}
                    placeholder="Nhập Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position || ''}
                    onChange={handleChange}
                    placeholder="Nhập chức danh"
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize || ''}
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
          </div>
          <div className="form-group">
            <label htmlFor="request">Yêu cầu đào tạo</label>
            <textarea
              id="request"
              name="request"
              value={formData.request || ''}
              onChange={handleChange}
              placeholder="Nhập yêu cầu ..."
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Đăng kí ngay
          </button>
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}

export default Footer;
