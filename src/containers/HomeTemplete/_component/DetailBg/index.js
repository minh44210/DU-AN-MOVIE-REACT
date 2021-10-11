import React, { Component } from "react";
import "./style.css";

export default class DetailBg extends Component {
  render() {
    return (
      <div className="warp">
        <div className="img-bg">
          <div className="top-left">
            <div>
              <h3 className="text">Thưởng thức trên TV của bạn. </h3>
              <p className="pp">
                Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV,
                đầu phát Blu-ray và nhiều thiết bị khác.
              </p>
              <button type="button" class="btn btn-danger">
                App miễn phí - Tải về ngay
              </button>
              <p className="pp">
                MOURIM có 2 phiên bản <span className="span-text">IOS</span> &{" "}
                <span className="span-text">Android</span>
              </p>
            </div>
            <div className="our-story-card-img-container">
              <div className="our-story-card-animation-container">
                <div className="our-story-card-animation">
                  <video
                    className="our-story-card-video"
                    autoPlay
                    playsInline
                    muted
                    loop
                  >
                    <source
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                      type="video/mp4"
                    />
                  </video>
                  <div className="our-story-card-animation-text" />
                </div>
                <img
                  className="our-story-card-img"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
