import values from "postcss-modules-values";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actUserRegHomeaApi } from "./Modules/actions";
import "./style.css";

export default function RegisterPage() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: "string",
    matKhau: "string",
    email: "string",
    soDt: "string",
    hoTen: "string",
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleReg = (event) => {
    event.preventDefault();
    dispatch(actUserRegHomeaApi(state));
  };

  return (
    <form onSubmit={handleReg} className="signin--vertical">
      <div className="container-login100">
        <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <div className="login100-form validate-form flex-sb flex-w">
            <span className="login100-form-title p-b-53">
              Đăng Kí để được nhiều ưu đãi, mua vé và bảo mật thông tin!
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
              <span className="txt1">Tài Khoản</span>
            </div>
            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="text"
                name="taiKhoan"
                onChange={handleOnchange}
              />
              <span className="focus-input100" />
            </div>
            {/*  */}
            <div className="p-t-31 p-b-9">
              <span className="txt1">Họ Tên</span>
            </div>
            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="text"
                name="hoTen"
                onChange={handleOnchange}
              />
              <span className="focus-input100" />
            </div>
            {/*  */}
            <div className="p-t-31 p-b-9">
              <span className="txt1">Số điện thoại</span>
            </div>
            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="text"
                name="soDt"
                onChange={handleOnchange}
              />
              <span className="focus-input100" />
            </div>
            {/*  */}
            <div className="p-t-13 p-b-9">
              <span className="txt1">Mật Khẩu</span>
            </div>
            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="password"
                name="matKhau"
                onChange={handleOnchange}
              />
              <span className="focus-input100" />
            </div>

            <div className="container-login100-form-btn m-t-17">
              <button type="submit" className="login100-form-btn">
                <a
                  style={{ textDecoration: "none" }}
                  href="/login"
                  className="txt2 bo1"
                  type="submit"
                >
                  Đăng ký
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
