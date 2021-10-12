import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchDatVeMoive } from "./Modules/action";
import { Tabs, Radio, Space } from "antd";
import "./style.css";

const { TabPane } = Tabs;

export class DatVeMoive extends React.PureComponent {
  state = {
    tabPosition: "left",
  };
  changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };

  render() {
    const { tabPosition } = this.state;
    return (
      <>
        <Tabs tabPosition={tabPosition}>
          <TabPane
            tab={<img src="" className="rounded-full" width="50" />}
            key="1"
          ></TabPane>
          <TabPane
            tab={<img src="" className="rounded-full" width="50" />}
            key="2"
          ></TabPane>
          <TabPane
            tab={<img src="" className="rounded-full" width="50" />}
            key="3"
          ></TabPane>
        </Tabs>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.datVeMoiveReducer.loading,
    data: state.datVeMoiveReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => {
      dispatch(actFetchDatVeMoive(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DatVeMoive);
