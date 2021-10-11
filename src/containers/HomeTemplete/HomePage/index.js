import React, { Component } from "react";
import Carousel from "../Carousel";
import ListMoviePage from "../ListMoviePage";
import DetailBg from "../_component/DetailBg";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <ListMoviePage />
        <DetailBg />
      </div>
    );
  }
}
