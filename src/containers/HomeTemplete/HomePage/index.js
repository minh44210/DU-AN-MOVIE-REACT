import Carousel from "../Carousel";
import DatVeMoive from "../DatVeMoive";
import ListMoviePage from "../ListMoviePage";
import DetailBg from "../_component/DetailBg";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";

import { layDanhSachHeThongRapAction } from "../../redux/actions/types/QuanLyRapAction";

export default function HomePage() {
  const { heThongRapChieu } = useSelector((state) => state.QuanlyRapReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachHeThongRapAction());
  }, []);
  return (
    <div>
      <Carousel />
      <ListMoviePage />
      <DatVeMoive heThongRapChieu={heThongRapChieu} />
      <DetailBg />
    </div>
  );
}
