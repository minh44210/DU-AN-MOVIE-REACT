import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./stytle.css";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-nav">
            <div className=" container">
              <a className="navbar-brand " href="/home">
                MouriM
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className=" collapse navbar-collapse bg-nav2"
                id="navbarSupportedContent"
              >
                <ul className=" navbar-nav ml-auto ">
                  <li className=" nav-item active mr-3">
                    <NavLink
                      exact
                      activeClassName="btn"
                      className="nav-link"
                      to="home"
                    >
                      Trang Chủ
                    </NavLink>
                  </li>
                  <li className="nav-item mr-3">
                    <NavLink
                      activeClassName="btn"
                      className="nav-link"
                      to="about"
                    >
                      Tin Tức
                    </NavLink>
                  </li>
                  {/* <li className="nav-item mr-3">
                    <span class="oi oi-person"></span>
                    <NavLink
                      activeClassName="btn"
                      className="nav-link"
                      to="/"
                    >
                      Portfolio
                    </NavLink>
                  </li> */}
                </ul>
                <ul className=" navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="btn"
                      className="nav-link"
                      to="login"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="btn"
                      className="nav-link"
                      to="dangky"
                    >
                      Đăng ký
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
