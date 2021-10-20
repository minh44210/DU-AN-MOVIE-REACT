import React, { useState } from "react";
import { actUserLoginHomeaApi } from "./Modules/actions";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";

function LoginHomePage(props) {
  const [state, setState] = useState({ taiKhoan: "", matKhau: "" });
  const dispatch = useDispatch();
  const error = useSelector((state) => state.UserLoginHomeReducer.error);

  console.log(state);
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handlieLogin = (event) => {
    event.preventDefault();
    dispatch(actUserLoginHomeaApi(state, props.history));
  };

  const renderNoti = () => {
    return (
      error && (
        <div className="noti alert alert-danger">
          {error.response.data.content}
        </div>
      )
    );
  };

  return (
    <form onSubmit={handlieLogin} className="signin--vertical">
      <div className="container-login100">
        <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <div className="login100-form validate-form flex-sb flex-w">
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
            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="text"
                name="taiKhoan"
                onChange={handleOnChange}
              />
              <span className="focus-input100" />
            </div>
            <div className="p-t-13 p-b-9">
              <span className="txt1">Mật Khẩu</span>
              <a href="#" className="txt2 bo1 m-l-5">
                Bạn cần trợ giúp?
              </a>
            </div>
            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="password"
                name="matKhau"
                onChange={handleOnChange}
              />
              <span className="focus-input100" />
            </div>

            <div className="container-login100-form-btn m-t-17">
              <button type="submit" className="login100-form-btn">
                Đăng nhập
              </button>
            </div>

            <div className="w-full text-center p-t-55">
              <span className="txt2">Bạn mới tham gia Netflix? </span>
              <a href="/dangky" className="txt2 bo1">
                Đăng ký ngay.
              </a>
            </div>
            {renderNoti()}
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginHomePage;
