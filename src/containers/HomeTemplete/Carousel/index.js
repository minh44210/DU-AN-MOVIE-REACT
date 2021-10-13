import React, { Component } from "react";
import "./style.css";
import ReactPlayer from "react-player";

export default class Carousel extends Component {
  render() {
    const { carousel } = this.props;

    return (
      <div style={{ backgroundColor: "#08131d" }}>
        {/* CAROUSEL  */}
        <div
          id="carouselExampleIndicators"
          className="carousel "
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active  ">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player "
                  light="https://i.postimg.cc/DzT0J0LL/thumb-1920-1003220.png"
                  url="https://www.youtube.com/watch?v=QwievZ1Tx-8&ab_channel=MarvelEntertainment"
                  width="100%"
                  height="100%"
                  playing
                />
              </div>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  light="https://i.postimg.cc/BQF1rcgR/oblivion-poster-phim-tom-cruise-hinh-nen-2560x1440-51.jpg"
                  url="https://www.youtube.com/watch?v=XmIIgE7eSak&ab_channel=MovieclipsTrailers"
                  width="100%"
                  height="100%"
                  playing
                />
              </div>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  light="http://i3.ytimg.com/vi/acQyrwQyCOk/maxresdefault.jpg"
                  url="https://www.youtube.com/watch?v=acQyrwQyCOk&ab_channel=UniversalPictures"
                  width="100%"
                  height="100%"
                  playing
                />
              </div>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  light="https://i.postimg.cc/bJr6QyjN/wallpapersden-com-squid-game-2021-2048x1152.jpg"
                  url="https://www.youtube.com/watch?v=oqxAJKy0ii4&ab_channel=Netflix"
                  width="100%"
                  height="100%"
                  playing
                />
              </div>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* CAROUSEL  */}

        {/* SERCH BAR  */}
        <div className="warp-bg">
          <div id="outer">
            <div class="btn-group group1">
              <div className="dropdown drop1">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Phim
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button">
                    {/* {carousel.maPhim} */}
                  </button>
                  <button className="dropdown-item" type="button">
                    TED2
                  </button>
                  <button className="dropdown-item" type="button">
                    TRAINWRECK{" "}
                  </button>
                </div>
              </div>
              <div className="dropdown drop1">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Rạp
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button">
                    CGV
                  </button>
                  <button className="dropdown-item" type="button">
                    BHD STARS
                  </button>
                  <button className="dropdown-item" type="button">
                    GALAXY CINEMA
                  </button>
                </div>
              </div>
              <div className="dropdown drop1">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenu3"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Ngày Xem
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button">
                    1/1/2019
                  </button>
                  <button className="dropdown-item" type="button">
                    12/1/2019{" "}
                  </button>
                  <button className="dropdown-item" type="button">
                    13/1/2019
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SERCH BAR  */}
        </div>
      </div>
    );
  }
}
