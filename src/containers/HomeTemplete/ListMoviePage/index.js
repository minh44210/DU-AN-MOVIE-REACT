import React, { Component } from "react";
import axios from "axios";
import Moive from "./MoiveCard";
// import Loadings from "../../../component/Loader";
import * as action from "./Modules/actions";
import { connect } from "react-redux";
class ListMoviePage extends Component {
  // CALL API
  componentDidMount() {
    // pending
    this.props.request();
    axios({
      url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE4LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzU2MTYwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjQ3NzA5MjAwfQ.Gn_duD0LZ6aamu893NNv17QlXn6HTFtyfWIFAIMBjEM",
      },
    })
      .then((result) => {
        this.props.succes(result.data.content);
      })
      .catch((error) => {
        this.props.failed(error);
      });
  }
  renderListMoive = () => {
    const { data, loading } = this.props;
    if (loading) return;
    return data?.slice(0, 8).map((movie) => {
      return <Moive key={movie.maPhim} moive={movie} />;
    });
  };

  // RENDER GIAO DIEN
  render() {
    return (
      <div className="container">
        <span style={{ paddingTop: 50, marginRight: 20 }}>
          <h3 className="lichChieu"> Phim Sắp chiếu</h3>
        </span>
        <div className="row">{this.renderListMoive()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listMoiveReducer.loading,
    data: state.listMoiveReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    request: () => {
      dispatch(action.actListMoiveRequest);
    },
    succes: (data) => {
      dispatch(action.actListMoiveSucces(data));
    },
    failed: (error) => {
      dispatch(action.actListMoiveFailed(error));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
