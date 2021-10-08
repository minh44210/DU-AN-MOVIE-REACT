import React, { Component } from "react";
import ReactPlayer from "react-player";
import ListMoviePage from "../ListMoviePage";

import "./style.css";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel "
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active  ">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
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
        <ListMoviePage />
      </div>
    );
  }
}
