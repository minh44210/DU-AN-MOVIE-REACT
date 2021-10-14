import React, { Component } from "react";
// import { actFetchDatVeMoive } from "./Modules/action";
import { Tabs, Radio, Space } from "antd";
import { NavLink } from "react-router-dom";

import "./style.css";
import moment from "moment";

const { TabPane } = Tabs;

export default class DatVeMoive extends React.Component {
  state = {
    tabPosition: "left",
  };
  changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };
  componentDidMount() {
    console.log(this.props);
  }

  renderHeThongRap = () => {
    return this.props.heThongRapChieu?.map((heThongRap, index) => {
      let { tabPosition } = this.state;

      return (
        <TabPane
          className="text-color"
          tab={
            <img src={heThongRap.logo} className="rounded-full" width="50" />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.slice(0, 5).map((cumRap, index) => {
              return (
                <TabPane
                  className="text-color"
                  tab={
                    <div style={{ width: "300px", display: "flex" }}>
                      <img src={heThongRap.logo} width="50" height="50" />
                      <br />
                      <div
                        style={{ color: "rgb(0, 0, 0)" }}
                        className="text-left ml-2 "
                      >
                        {cumRap.tenCumRap}

                        <p
                          style={{
                            color: "black",
                            fontSize: 11,
                            opacity: "70%",
                          }}
                        >
                          {cumRap.diaChi}
                        </p>
                        <p className="chitiet">Chi Tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {/* // LOAD PHIM */}
                  {cumRap.danhSachPhim.map((phim, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className="warp-lichchieu ">
                          <div
                            style={{ display: "flex" }}
                            className="warp-content"
                          >
                            <img
                              width={50}
                              height={50}
                              src={phim.hinhAnh}
                              alt={phim.tenPhim}
                            />
                            <div>
                              <h5
                                style={{ textTransform: "uppercase" }}
                                className="ml-3"
                              >
                                {phim.tenPhim} - PHIM HOT
                              </h5>
                              <p
                                style={{ color: "black", opacity: "70%" }}
                                className="ml-3"
                              >
                                {cumRap.diaChi}
                              </p>
                              {phim.lstLichChieuTheoPhim
                                ?.slice(0, 6)
                                .map((lichchieu, index) => {
                                  return (
                                    <button className="button-66 text-lichchieu">
                                      <span className="text-lichchieu">
                                        <NavLink
                                          style={{ color: "1890ff" }}
                                          to="/"
                                          key={index}
                                        >
                                          {moment(
                                            lichchieu.ngayChieuGioChieu
                                          ).format("hh:mm A")}
                                        </NavLink>
                                      </span>
                                    </button>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  render() {
    const { tabPosition } = this.state;
    return (
      <div style={{ backgroundColor: "#08131d" }} className="container">
        <div className="all-tab">
          <Tabs tabPosition={tabPosition}>{this.renderHeThongRap()}</Tabs>
        </div>
      </div>
    );
  }
}
