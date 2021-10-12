import React, { Component } from "react";
import "./stytle.css";
import { ImFacebook } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { ImTumblr } from "react-icons/im";

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* <!-- Site footer --> */}
        <footer className="site-footer">
          <div className="container4">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>MOURIM</h6>
                <br />
                <p className="text-justify">
                  Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                  Hồ Chí Minh, Việt Nam. Giấy chứng nhận đăng ký kinh doanh số:
                  0101659783, đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm
                  2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp. Số
                  Điện Thoại (Hotline): 1900 545 436 Email: support@tix.vn
                </p>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li>
                    <a href="#">MOURIM Việt Nam</a>
                  </li>
                  <li>
                    <a href="#">Giới Thiệu</a>
                  </li>
                  <li>
                    <a href="#">Tiện Ích Online</a>
                  </li>
                  <li>
                    <a href="#">Thẻ Quà Tặng</a>
                  </li>
                  <li>
                    <a href="#">Tuyển Dụng</a>
                  </li>
                  <li>
                    <a href="#">Liên Hệ Quảng Cáo</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Điều khoản sử dụng</h6>
                <ul className="footer-links">
                  <li>
                    <a href="#">Điều Khoản Chung</a>
                  </li>
                  <li>
                    <a href="#">Điều Khoản Giao Dịch</a>
                  </li>
                  <li>
                    <a href="#">Contribute</a>
                  </li>
                  <li>
                    <a href="#">Chính Sách Thanh Toán</a>
                  </li>
                  <li>
                    <a href="#">Chính Sách Bảo Mật</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Chăm sóc khách hàng</h6>
                <ul className="footer-links">
                  <li>
                    <a href="#">Hotline: 1900 6017</a>
                  </li>
                  <li>
                    <a href="#">Điều Khoản Giao Dịch</a>
                  </li>
                  <li>
                    <a href="#">
                      Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ
                      Tết)
                    </a>
                  </li>
                  <li>
                    <a href="#">Email hỗ trợ: hoidap@mourim.vn</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container4">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  COPYRIGHT 2017 CJ MOURIM. All RIGHTS RESERVED .{" "}
                </p>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li>
                    <a className="facebook" href="#">
                      <ImFacebook />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <ImInstagram />
                    </a>
                  </li>
                  <li>
                    <a className="dribbble" href="#">
                      <ImYoutube />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <ImTumblr />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
