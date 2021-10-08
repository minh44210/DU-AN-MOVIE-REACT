import React, { Component } from "react";
import "./style.css";

export default class Moive extends Component {
  render() {
    const { moive } = this.props;

    return (
      <div>
        {/* CODE CUA TOI  */}
        <div className="movie-card movie-card2">
          <div
            style={{
              backgroundImage: `url(${moive.hinhAnh})`,
              backgroundSize: `cover`,
            }}
            className="movie-header "
          >
            <div className="header-icon-container">
              <a href="#">
                <i className="material-icons header-icon">{}</i>
              </a>
            </div>
          </div>
          {/*movie-header*/}
          <div className="movie-content">
            <div className="movie-content-header">
              <a href="#">
                <h3 className="movie-title">{moive.tenPhim}</h3>
              </a>
              <div className="imax-logo" />
            </div>
            <div className="movie-info">
              <div className="info-section">
                <label>Ngày &amp; Giờ</label>
                <span>Sun 8 Sept - 10:00PM</span>
              </div>
              {/*date,time*/}
              <div className="info-section">
                <label>Screen</label>
                <span>03</span>
              </div>
              {/*screen*/}
              <div className="info-section">
                <label>Row</label>
                <span>F</span>
              </div>
              {/*row*/}
              <div className="info-section">
                <label>Seat</label>
                <span>21,22</span>
              </div>
              {/*seat*/}
            </div>
          </div>
          {/*movie-content*/}
        </div>
        {/*movie-card*/}
      </div>
    );
  }
}
