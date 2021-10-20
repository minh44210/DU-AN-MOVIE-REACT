import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Star } from "react-ionicons";

import "./style.css";

export default class Moive extends Component {
  render() {
    const { moive } = this.props;

    return (
      <div className="container-box">
        <div className=" movie col-md-2">
          <div className="card movie-card movie-card2">
            <div
              className="img-card"
              style={{
                backgroundImage: `url(${moive.hinhAnh})`,
                backgroundSize: `cover`,
                // width: 263,
                // height: 380,
              }}
              className="movie-header "
            >
              <div className="header-icon2-container"></div>
              <div className="header-icon-container">
                <Link to={`detail/${moive.maPhim}`}>
                  <i className="material-icons header-icon">{}</i>
                </Link>
              </div>
            </div>
            {/*movie-header*/}
            <Link to={`detail/${moive.maPhim}`}>
              <div className="movie-content">
                <div className="movie-content-header">
                  <h3 className="movie-title">{moive.tenPhim}</h3>
                  <div className="imax-logo" />
                </div>

                <div className="movie-info">
                  <div className="info-section">
                    <label>Ngày &amp; Giờ</label>
                    <span className="span-moviecard">
                      {new Date(moive.ngayKhoiChieu).toLocaleDateString()} -{" "}
                      {new Date(moive.ngayKhoiChieu).toLocaleTimeString()}
                    </span>
                  </div>
                  {/*date,time*/}
                  <div className="info-section">
                    <label>Đánh Giá</label>
                    <span> {moive.danhGia} / 10</span>{" "}
                    <Star color={"#ECC331"} height="10px" width="10px" />
                  </div>
                </div>
              </div>
            </Link>
            {/*movie-content*/}
          </div>
          {/*movie-card*/}
        </div>
      </div>
    );
  }
}
