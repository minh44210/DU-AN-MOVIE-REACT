import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchDetailMoive } from "./Modules/actions";
import "./style.css";
// ION ICON
import { HeartCircleOutline } from "react-ionicons";
import { ShareSocialOutline } from "react-ionicons";
import { StarOutline } from "react-ionicons";
import { Star } from "react-ionicons";
// ION ICON

class DetailMoive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        tenHeThongRap: "BHD Star Cineplex",
        tenHeThongRap2: "CGV",
        tenHeThongRap3: "MegaGS",
        tenHeThongRap4: "CineStar",
        tenHeThongRap5: "Galaxy Cinema",
      },
      logo: {
        logoBHD:
          "https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
        logoCGV: "https://movienew.cybersoft.edu.vn/hinhanh/cgv.png",
        logoCINE: "https://movienew.cybersoft.edu.vn/hinhanh/cinestar.png",
        logoMEGA: "https://movienew.cybersoft.edu.vn/hinhanh/megags.png",
        logoGALA: "https://movienew.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
      },
      lichChieu: {
        maLichChieu1: 16477,
        maRap1: "474",
        tenRap1: "Rạp 4",
        ngayChieuGioChieu1: "2019-01-01T10:10:00",
        giaVe1: 72000,

        maLichChieu2: 16478,
        maRap2: "474",
        tenRap2: "Rạp 4",
        ngayChieuGioChieu2: "2019-01-01T12:10:00",
        giaVe2: 95000,

        maLichChieu3: 16479,
        maRap3: "474",
        tenRap3: "Rạp 4",
        ngayChieuGioChieu3: "2019-01-01T14:10:00",
        giaVe3: 85000,

        maLichChieu4: 16480,
        maRap4: "474",
        tenRap4: "Rạp 4",
        ngayChieuGioChieu4: "2019-01-01T16:10:00",
        giaVe4: 59000,
      },
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchData(id);
  }

  render() {
    // RATING
    const rating = () => {
      if (data?.danhGia > 8) {
        return (
          <div>
            <Star
              className="star"
              color={"#f5b50a"}
              height="40px"
              width="40px"
            />
            <Star
              className="star"
              color={"#f5b50a"}
              height="40px"
              width="40px"
            />
            <Star
              className="star"
              color={"#f5b50a"}
              height="40px"
              width="40px"
            />
            <Star
              className="star"
              color={"#f5b50a"}
              height="40px"
              width="40px"
            />
          </div>
        );
      }
      if (data?.danhGia >= 5) {
        return (
          <div>
            <Star
              className="star"
              color={"#f5b50a"}
              height="40px"
              width="40px"
            />
            <Star
              className="star"
              color={"#f5b50a"}
              height="40px"
              width="40px"
            />
          </div>
        );
      }
    };
    const { data } = this.props;
    return (
      <div id="" classname=" container">
        <div className="row">
          <div className="spacing">
            <img className="img-fluid" src={data?.hinhAnh} />
          </div>
          <div className="table1">
            <div className="warp-item">
              {/* Tab PHIM  */}
              <h2 className="name">{data?.tenPhim}</h2>
              {/* TAB ICON  */}
              <div className="social-btn">
                <div className="ion-icon">
                  <HeartCircleOutline
                    color={"#dd003f"}
                    height="50px"
                    width="50px"
                  />
                </div>
                <a href="#" className="parent-btn">
                  Yêu Thích
                </a>
                <div>
                  <ShareSocialOutline
                    className="ion-icon"
                    color={"#df2020"}
                    height="50px"
                    width="50px"
                  />
                </div>
                <div className="hover-bnt">
                  <a href="#" className="parent-btn">
                    <i className="ion-android-share-alt" />
                    Chia sẽ
                  </a>
                </div>
              </div>
              {/* TAB ICON  */}
              {/* Tab PHIM  */}
              <div className="movie-tab">
                <div className="tap">
                  <ul className="tab-links tabs-mv">
                    <li className="active2">
                      <a className="chagne-text" href="#overview">
                        Overview
                      </a>
                    </li>
                    <li className="active2">
                      <a className="chagne-text" href="#reviews">
                        {" "}
                        Reviews
                      </a>
                    </li>
                    <li className="active2">
                      <a className="chagne-text" href="#cast">
                        {" "}
                        Cast &amp; Crew{" "}
                      </a>
                    </li>
                    <li className="active2">
                      <a className="chagne-text" href="#media">
                        {" "}
                        Media
                      </a>
                    </li>
                    <li className="active2">
                      <a className="chagne-text" href="#moviesrelated">
                        {" "}
                        Related Movies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Tab PHIM  */}
              <div className="moive-text">
                <p>{data?.moTa}</p>
              </div>
              {/* RATING MOIVE  */}
              <div className="movie-rate">
                <Star
                  className="star1"
                  color={"#f5b50a"}
                  height="40px"
                  width="40px"
                />
                <div className="rate">
                  <p>
                    <span> {data?.danhGia}</span> /10
                    <br />
                    <span className="rv">56 Reviews</span>
                  </p>
                </div>
                <div className="rate-star">
                  <span className="rate-this">Đánh Giá:</span>
                  <div>{rating()}</div>

                  <StarOutline color={"#00000"} height="40px" width="40px" />
                </div>
                {/* RATING MOIVE  */}
              </div>
              {/* RATING MOIVE  */}
              {/* LICH CHIEU MOVIE  */}
              <div className="">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th className="menu-lichChieu" scope="col">
                        Cụm Rạp
                      </th>
                      <th className="menu-lichChieu" scope="col">
                        Ngày Chiếu
                      </th>
                      <th className="menu-lichChieu" scope="col">
                        Giờ Chiếu
                      </th>
                      <th className="menu-lichChieu" scope="col">
                        Giá Vé /Người
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <img className="logo" src={this.state.logo.logoBHD} />
                      </th>
                      <td>{this.state.item.tenHeThongRap}</td>
                      <td>
                        {new Date(
                          this.state.lichChieu.ngayChieuGioChieu1
                        ).toLocaleDateString()}
                      </td>
                      <td>
                        {new Date(
                          this.state.lichChieu.ngayChieuGioChieu1
                        ).toLocaleTimeString()}
                      </td>
                      <td>{this.state.lichChieu.giaVe1} VNĐ</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img className="logo" src={this.state.logo.logoCGV} />
                      </th>
                      <td>{this.state.item.tenHeThongRap2}</td>
                      <td>
                        {new Date(
                          this.state.lichChieu.ngayChieuGioChieu2
                        ).toLocaleDateString()}
                      </td>
                      <td>
                        {new Date(
                          this.state.lichChieu.ngayChieuGioChieu2
                        ).toLocaleTimeString()}
                      </td>
                      <td>{this.state.lichChieu.giaVe2} VNĐ</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img className="logo" src={this.state.logo.logoMEGA} />
                      </th>
                      <td>{this.state.item.tenHeThongRap3}</td>
                      <td>
                        {new Date(
                          this.state.lichChieu.ngayChieuGioChieu3
                        ).toLocaleDateString()}
                      </td>
                      <td>
                        {new Date(
                          this.state.lichChieu.ngayChieuGioChieu3
                        ).toLocaleTimeString()}
                      </td>
                      <td>{this.state.lichChieu.giaVe3} VNĐ</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img className="logo" src={this.state.logo.logoCINE} />
                      </th>
                      <td>{this.state.item.tenHeThongRap4}</td>
                      <td>
                        {new Date(
                          this.state.lichChieu.ngayChieuGioChieu4
                        ).toLocaleDateString()}
                      </td>
                      <td>
                        {new Date(
                          this.state.lichChieu.ngayChieuGioChieu4
                        ).toLocaleTimeString()}
                      </td>
                      <td>{this.state.lichChieu.giaVe4} VNĐ</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img className="logo" src={this.state.logo.logoGALA} />
                      </th>
                      <td>{this.state.item.tenHeThongRap5}</td>
                      <td>
                        {new Date(
                          this.state.lichChieu.ngayChieuGioChieu2
                        ).toLocaleDateString()}
                      </td>
                      <td>
                        {new Date(
                          this.state.lichChieu.ngayChieuGioChieu3
                        ).toLocaleTimeString()}
                      </td>
                      <td>{this.state.lichChieu.giaVe1} VNĐ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* END TASK  */}
            </div>
          </div>
        </div>

        <button type="button" className="btn  btn-danger">
          <h4 id="detail-content">Xem Trailer</h4>
        </button>
        <button type="button" id="btnactive" className="btn btn-warning">
          <h4 id="detail-content">Mua Vé</h4>
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.detailMoiveReducer.loading,
    data: state.detailMoiveReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => {
      dispatch(actFetchDetailMoive(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailMoive);
