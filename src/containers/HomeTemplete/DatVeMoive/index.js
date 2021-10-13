import React, { Component } from "react";
// import { actFetchDatVeMoive } from "./Modules/action";
import { Tabs, Radio, Space } from "antd";
import { connect } from "react-redux";
import "./style.css";

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
                        <p className="chitiet">Chi Tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {/* // LOAD PHIM */}

                  {cumRap.danhSachPhim.map((phim, index) => {})}
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
