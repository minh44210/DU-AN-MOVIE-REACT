import React, { Component } from "react";
import "./style.css";

export default class LoginHomePage extends Component {
  render() {
    return (
      <div className="signin--vertical">
        <div className="container-login100">
          <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
            <form className="login100-form validate-form flex-sb flex-w">
              <span className="login100-form-title p-b-53">
                Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
              </span>
              <a href="#" className="btn-face m-b-20">
                <img
                  src="https://vshop.asia/images/socials/facebook.png"
                  alt="FACEBOOK"
                  style={{ margin: 10 }}
                />
                Đăng nhập bằng Facebook
              </a>
              <a href="#" className="btn-google m-b-20">
                <img
                  src="https://colorlib.com/etc/lf/Login_v5/images/icons/icon-google.png"
                  alt="GOOGLE"
                  style={{ margin: 10 }}
                />
                Đăng nhập bằng Google
              </a>
              <div className="p-t-31 p-b-9">
                <span className="txt1">Email hoặc số điện thoại</span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Username is required"
              >
                <input className="input100" type="text" name="username" />
                <span className="focus-input100" />
              </div>
              <div className="p-t-13 p-b-9">
                <span className="txt1">Mật Khẩu</span>
                <a href="#" className="txt2 bo1 m-l-5">
                  Bạn cần trợ giúp?
                </a>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input className="input100" type="password" name="pass" />
                <span className="focus-input100" />
              </div>
              <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn">Đăng nhập</button>
              </div>
              <div className="w-full text-center p-t-55">
                <span className="txt2">Bạn mới tham gia Netflix? </span>
                <a href="#" className="txt2 bo1">
                  Đăng ký ngay.
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
