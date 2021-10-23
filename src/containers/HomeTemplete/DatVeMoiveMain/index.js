import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import "./seatCheckOut.css";
import { actMoiveMainApi } from "./Modules/actions";

export default function DatVeMoiveMain(props) {
  const ThongTinMovie = useSelector((state) => state.MoiveMainReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = actMoiveMainApi(props.match.params.id);

    dispatch(action);
  }, []);
  console.log(ThongTinMovie, "123");
  const { data } = ThongTinMovie;

  const renderSeat = () => {
    return data?.danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === "true" ? "gheDaDat" : "";

      return (
        <button
          // disabled={ghe.daDat}
          className={`ghe ${classGheVip} ${classGheDaDat}`}
          key={index}
        >
          {ghe.stt}
        </button>
      );
    });
  };
  return (
    <div className="">
      <div
        id="rightcheckout"
        src="'app/checkout/right/right.html'"
        style={{ right: 0 }}
        className="ng-scope"
      >
        <div className="ng-scope contentfullright customScroll">
          <div className="row total" style={{}}>
            <p className="cash ng-binding" id="totalcost">
              0 đ
            </p>
          </div>
          {/* ngIf: pCinemaId!=1 */}
          <div className="media">
            <div className="media-body">
              <h5 className="mt-0"> {data?.thongTinPhim?.tenPhim}</h5>
              <p>{data?.thongTinPhim?.tenCumRap}</p>
              <p>{data?.thongTinPhim?.diaChi}</p>
              <p>
                {data?.thongTinPhim?.ngayChieu} - {data?.thongTinPhim?.gioChieu}
                - {data?.thongTinPhim?.tenRap}
              </p>
            </div>
          </div>

          <div className="chair row ng-scope" style={{}}>
            <div className="info col-sm-7 col-xs-7">
              <span style={{ color: "#fb4226" }} className="ng-scope">
                Ghế
              </span>

              <span className="title ng-binding" />
            </div>
            <div className="totalchair col-sm-5 col-xs-5 ng-binding">0 đ</div>
          </div>

          <div className="infouser" style={{}}>
            {/* <div ng-if="isEmailValid" class="title">Email</div> */}
            <div className="row">
              <input
                id="emailCheckout"
                style={{ border: 0 }}
                className="content col-sm-10 col-xs-10 ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"
                type="text"
                required
              />

              <label className="no-font-weight" htmlFor="emailCheckout">
                Email
              </label>
            </div>
          </div>
          <div className="infouser" style={{}}>
            <div className="row">
              <input
                id="phoneCheckout"
                style={{ border: 0 }}
                className="content col-sm-10 col-xs-10 ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
                type="text"
                required
              />
              <label className="no-font-weight" htmlFor="phoneCheckout">
                Phone
              </label>
            </div>

            <div className="error phoneerror ng-binding ng-scope" />
            {/* end ngIf: !isPhoneValid */}
          </div>
          {/* ngIf: isNewApi */}
          <div className="voucher-promo ng-scope" ng-if="isNewApi">
            <div className="row">
              <input
                id="voucherPromotion"
                style={{ border: 0 }}
                className="content col-sm-10 col-xs-10 ng-pristine ng-untouched ng-valid ng-empty"
                type="text"
              />
              <label
                className="no-font-weight js-voucher-label"
                htmlFor="voucherPromotion"
              >
                Mã giảm giá
              </label>

              <div
                id="apply-voucher"
                className="ng-scope remove btn-apply-voucher disabled"
              >
                Áp dụng
              </div>
            </div>
          </div>

          <div className="methodpay ng-scope" ng-if="isNewApi">
            <div className="titlemethodpay">
              Hình thức thanh toán
              <div className="errormethodpay" />
            </div>
            <div
              ng-show="totalPrice==0 && listseatchosencode.length==0"
              style={{ color: "#FB4226", padding: "5px 0", fontSize: 13 }}
            >
              Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
            </div>
            {/* ngRepeat: payment in listPayment */}
            <div
              className="chosenmethod ZALOPAY ng-hide first-class"
              data-name="Thanh toán qua ZaloPay"
              data-type="ZALOPAY"
            >
              <div className="paymentParent ng-scope">
                <input
                  type="radio"
                  name="method"
                  defaultValue="ZALOPAY"
                  defaultChecked="checked"
                />

                <div className="titlechosen ng-binding">
                  Thanh toán qua ZaloPay
                  {/* ngIf: payment.note */}
                  <div
                    className="wrap-methodnote ng-scope"
                    ng-if="payment.note"
                  >
                    <div className="methodnote ng-binding">
                      x3 vé BHD Star 59k/vé cho tất cả khách hàng
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="chosenmethod CC ng-hide"
              data-name="Visa, Master, JCB"
              data-type="CC"
            >
              {/* ngIf: userMethodPay !== undefined */}
              <div
                className="paymentParent ng-scope"
                ng-if="userMethodPay !== undefined"
              >
                <input
                  type="radio"
                  name="method"
                  defaultValue="CC"
                  ng-checked="false"
                />
                <img
                  className="icon"
                  ng-src="https://s3img.vcdn.vn/123phim/2018/12/e20d486bc2a60a2a1d7186c0ec9e177b.png"
                  src="https://s3img.vcdn.vn/123phim/2018/12/e20d486bc2a60a2a1d7186c0ec9e177b.png"
                />
                <div className="titlechosen ng-binding">
                  Visa, Master, JCB
                  {/* ngIf: payment.note */}
                </div>
                {/* ngIf: payment.is_list */}
              </div>
              {/* end ngIf: userMethodPay !== undefined */}
              {/* ngIf: userMethodPay === undefined */}
              {/* ngIf: payment.is_list */}
            </div>
            {/* end ngRepeat: payment in listPayment */}
            <div
              className="chosenmethod ATM ng-hide list"
              data-name="Thẻ ATM nội địa"
              data-type="ATM"
              ng-class="{'list': payment.is_list, 'first-class' : $first}"
              ng-show="checkShowPayment(payment, totalPrice, combocost) || listseatchosencode.length!=0"
              ng-repeat="payment in listPayment"
              ng-click="choosePayment($event)"
            >
              {/* ngIf: userMethodPay !== undefined */}
              <div
                className="paymentParent ng-scope"
                ng-if="userMethodPay !== undefined"
              >
                <input
                  type="radio"
                  name="method"
                  defaultValue="ATM"
                  ng-checked="false"
                />
                <img
                  className="icon"
                  ng-src="https://s3img.vcdn.vn/123phim/2018/12/784b134b515da6e0cb8779e2a33f8221.png"
                  src="https://s3img.vcdn.vn/123phim/2018/12/784b134b515da6e0cb8779e2a33f8221.png"
                />

                <input
                  type="radio"
                  name="method"
                  defaultValue="PAYOO"
                  ng-checked="false"
                />
                <img
                  className="icon"
                  ng-src="https://s3img.vcdn.vn/123phim/2018/12/fa954e5ecb81ef0fdc9bb2595dfbd015.png"
                  src="https://s3img.vcdn.vn/123phim/2018/12/fa954e5ecb81ef0fdc9bb2595dfbd015.png"
                />
                <div className="titlechosen ng-binding">
                  Thanh toán tại cửa hàng tiện ích
                  {/* ngIf: payment.note */}
                </div>
                {/* ngIf: payment.is_list */}
              </div>
              {/* end ngIf: userMethodPay !== undefined */}
              {/* ngIf: userMethodPay === undefined */}
              {/* ngIf: payment.is_list */}
            </div>
            {/* end ngRepeat: payment in listPayment */}
            <div className="clearBoth" />
          </div>
          {/* end ngIf: isNewApi */}
          {/* ngIf: pCinemaId != 1 */}
          <div className="notice ng-scope" style={{}} ng-if="pCinemaId != 1">
            <div className="errorbook"></div>
            <img className="icon" src="app/assets/img/icons/exclamation.png" />
            <span className="title" style={{}}>
              Vé đã mua không thể đổi hoặc hoàn tiền
              <br />
            </span>
            <span className="title" style={{}}>
              Mã vé sẽ được gửi qua tin nhắn
              <span style={{ color: "#f79320" }}>ZMS</span> (tin nhắn Zalo) và
              <span style={{ color: "#f79320" }}>Email</span> đã nhập.
            </span>
            <br />
          </div>
          {/* end ngIf: pCinemaId != 1 */}
          {/* ngIf: pCinemaId == 1 */}
        </div>
        {/* ngIf: (isEmailValid && isPhoneValid && isCheckedMethodPay() && fullchosen && totalticket > 0 && pCinemaId != 1) */}
        {/* ngIf: (isEmailValid && isPhoneValid && isCheckedMethodPay() && fullchosen && totalticket > 0 && pCinemaId == 1) */}
        {/* ngIf: !isEmailValid || !isPhoneValid || !isCheckedMethodPay() || !fullchosen || totalticket === 0  */}
        <div
          className="buyticket ng-binding ng-scope"
          style={{
            backgroundColor: "green",
            backgroundImage: "none",
          }}
        >
          Đặt Vé
          {/* ngIf: loading */}
        </div>
        {/* end ngIf: !isEmailValid || !isPhoneValid || !isCheckedMethodPay() || !fullchosen || totalticket === 0  */}
        {/* ngIf: pCinemaId!=1 */}
        <div className="continuebuttonmobile row ng-scope" ng-if="pCinemaId!=1">
          {/* ngIf: pCinemaId!=1 */}
          <div className="totalcost col-xs-6 ng-scope" ng-if="pCinemaId!=1">
            <p className="seatchosen ng-binding" />
          </div>
          {/* end ngIf: pCinemaId!=1 */}
          <div className="continuebutton col-xs-6 disabled">
            {/* ngIf: !loading */}
            <div className="title ng-scope" ng-if="!loading">
              ĐẶT VÉ
            </div>
            {/* end ngIf: !loading */}
            {/* ngIf: loading */}
          </div>
        </div>
        {/* end ngIf: pCinemaId!=1 */}
        {/* ngIf: pCinemaId==1 */}
        {/* ngIf: step==3 */}
        <div id="zalopaycheckout" ng-if="step==3" className="ng-scope">
          <div className="qr-header">
            <span className="comfirm">XÁC NHẬN THANH TOÁN VỚI</span>
            <img
              className="logozalopay"
              src="app/assets/img/icons/zalopaymethod.png"
            />
          </div>
          <div className="qr-wrap-code">
            <img className="codeqr" />
          </div>
          <p className="qr-noti">
            Quét QR code để thanh toán
            <span className="totalticket ng-binding"> vé</span> với số tiền
            <span className="totalcost ng-binding">
              NaN đ<span></span>
            </span>
          </p>
          <div className="qr-countdown">
            <p>
              Thời gian còn lại
              <span className="minute">05</span>
              <span>:</span>
              <span className="second">00</span>
            </p>
          </div>
          <div className="qr-cancel">
            {/* ngIf: !cancelZaloPay */}
            <img
              ng-src="app/assets/img/icons/close_grey.png"
              className="logoclose ng-scope"
              src="app/assets/img/icons/close_grey.png"
            />
            {/* end ngIf: !cancelZaloPay */}
            {/* ngIf: cancelZaloPay */}
          </div>
        </div>
        {/* end ngIf: step==3 */}
        {/* ngIf: step==3 */}
        <div id="payoocheckout" ng-if="step==3" className="ng-scope">
          <div className="checkout-success custom_scrollbar">
            {/* ngIf: pCinemaId!=1 */}
            <div className="infotop ng-scope" ng-if="pCinemaId!=1">
              <div
                className="poster-info"
                style={{
                  backgroundImage:
                    'url("https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16176188609123.png")',
                }}
              ></div>
              <div className="block-info">
                <p className="filmname ng-binding">
                  <span className="ng-binding ageType">C18</span>
                  <span className="label version ng-binding">2D</span>
                  <span className="label version digital ng-binding">
                    Digital
                  </span>
                  Lật Mặt: 48h
                </p>
                <h3>
                  <span
                    className="pcinema ng-binding"
                    style={{ color: "#8bc541" }}
                  >
                    BHD Star
                  </span>
                  <span className="cinemaname ng-binding"> - Vincom 3/2</span>
                </h3>
                <p
                  style={{ color: "#9B9B9B!important" }}
                  className="ng-binding"
                >
                  L5-Vincom 3/2, 3C Đường 3/2, Q.10
                </p>
                <table style={{ marginTop: 10 }}>
                  <tbody>
                    {/* ngIf: isNewApi==false */}
                    <tr className="rowinfo">
                      <td valign="top" className="titlecontent" width={90}>
                        Suất chiếu:
                      </td>
                      <td className="contentfull ng-binding" />
                    </tr>
                    <tr className="rowinfo">
                      <td valign="top" className="titlecontent">
                        Phòng:
                      </td>
                      <td className="contentfull ng-binding">RẠP 5</td>
                    </tr>
                    {/* ngIf: pCinemaId!=1 */}
                    <tr className="rowinfo ng-scope" ng-if="pCinemaId!=1">
                      <td valign="top" className="titlecontent">
                        Ghế:
                      </td>
                      <td className="contentfull ng-binding" />
                    </tr>
                    {/* end ngIf: pCinemaId!=1 */}
                  </tbody>
                </table>
              </div>
              <div style={{ clear: "both" }} />
            </div>
            {/* end ngIf: pCinemaId!=1 */}
            {/* ngIf: pCinemaId==1 */}
            <div className="row" style={{ marginTop: 10 }}>
              <div className="infobook" valign="top" width={300}>
                <h3>Thông tin đặt vé</h3>
                <table>
                  <tbody>
                    <tr className="rowinfo">
                      <td valign="top" className="titlecontent" width={80}>
                        Họ tên:
                      </td>
                      <td className="contentfull ng-binding" />
                    </tr>
                    <tr className="rowinfo">
                      <td valign="top" className="titlecontent">
                        Điện thoại:
                      </td>
                      <td className="contentfull ng-binding" />
                    </tr>
                    <tr className="rowinfo">
                      <td valign="top" className="titlecontent">
                        Email:
                      </td>
                      <td className="contentfull ng-binding" />
                    </tr>
                    <tr className="rowinfo">
                      <td valign="top" className="titlecontent">
                        Trạng thái:
                      </td>
                      <td className="contentfull">
                        <span id="trans-status">
                          Đang chờ kết quả thanh toán
                        </span>
                      </td>
                    </tr>
                    <tr className="rowinfo totalcost">
                      <td valign="top" className="titlecontent" width={120}>
                        Tổng tiền:
                      </td>
                      <td className="contentfull ng-binding">NaN đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="payoo-number">
              <span className="payoo-code">Mã thanh toán Payoo:</span>
              <span style={{ fontSize: 32 }} className="ng-binding" />
            </div>
            <div style={{ margin: "30px 0 20px 0" }}>
              <ul style={{ listStyleType: "circle", paddingLeft: "3%" }}>
                <li>
                  Vui lòng sử dụng mã thanh toán bên trên đến cửa hàng gần nhất
                  để hoàn tất việc đặt vé.
                </li>
                <li>
                  Mã vé sẽ được gửi qua số điện thoại và email đặt vé của bạn.
                </li>
                <li className="ng-binding">Giao dịch này sẽ hết hạn lúc .</li>
                <li>
                  Tìm cửa hàng gần nhà
                  <a
                    href="https://www.payoo.vn/diem-giao-dich"
                    target="_blank"
                    rel="nofollow"
                    style={{ color: "#f79320" }}
                  >
                    tại đây
                  </a>
                  .
                  <p />
                </li>
              </ul>
            </div>
          </div>
          <div className="payoo-cancel">
            <img
              src="app/assets/img/icons/close_grey.png"
              className="logoclose"
              ng-click="closepayoo()"
            />
          </div>
        </div>
        {/* end ngIf: step==3 */}
        {/* ngIf: flagmodal */}
        {/* ngIf: step==3 */}
        <div id="confirmcheckout" ng-if="step==3" className="ng-scope">
          <div className="contentfull">
            <div className="contentHeader">
              <img src="app/assets/img/Post-notification.png" />
            </div>
            <div className="title">Bạn có chắc chắn muốn thoát không?</div>
            <div className="row button">
              <div className="containBtn float-left">
                <button className="btnConfirm btnNo" ng-click="closeconfirm()">
                  Không
                </button>
              </div>
              <div className="containBtn">
                <button
                  className="btnConfirm btnYes"
                  ng-click="reloadcheckout()"
                >
                  Có
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEA CHEACK OUT  */}
      <div
        id="seatcheckout"
        style={{}}
        ng-if="isNewApi && !isAllowedStudentPrice"
        ng-controller="CheckoutSeatV2Controller"
        src="'app/checkout/seat/seatv2.html'"
        className="ng-scope"
      >
        <div className="row ng-scope" id="seatv2">
          <div className="seatmap">
            <div className="parent-panzoom">
              <div className="room panzoom" id="seatmanroom">
                <div className="screen">
                  <div className="namescreen">
                    <img
                      className="logo-screen"
                      src="https://tix.vn/app/assets/img/icons/screen.png"
                    />
                  </div>
                </div>
                <div className="listseat">
                  <div
                    style={{
                      textAlign: "left",
                      margin: "auto",
                      width: "fit-content",
                    }}
                  >
                    {/* ngIf: loadingseat */}
                    {/* ngIf: errorLoadingSeat !== '' */}

                    {/* end ngIf: errorLoadingSeat !== '' */}
                    {/* ngRepeat: rowseat in typeseat */}
                  </div>
                </div>
                <br />
                {/* asdasdasdasdasdasdasd */}
                {renderSeat()}
              </div>
            </div>
            <div className="noteseat">
              <div className="costadd"></div>
              <div className="typeseats">
                {/* ngRepeat: seatType in seat_desc */}
                <span className="typeseat colorseat colorchoosing">
                  <span className="s-img icon-s-type-single" />
                  <span className="nameseat">Ghế đang chọn</span>
                </span>
                <span className="typeseat colorseat colorchosen">
                  <span className="s-img icon-s-type-single">
                    <img
                      className="notchoose"
                      src="app/assets/img/icons/notchoose.png"
                    />
                  </span>
                  <span className="nameseat">Ghế đã có người chọn</span>
                </span>
                <span className="typeseat colorseat colornotchosen">
                  <span className="s-img icon-s-type-single">
                    {/* <img class="notchoose" src="app/assets/img/icons/notchoose.png"> */}
                  </span>
                  <span className="nameseat">Ghế không thể chọn</span>
                </span>
              </div>
              {/* ngIf: best_seat != '' */}
              <div className="positionviews ng-scope" ng-if="best_seat != ''">
                <span className="positionview">
                  <span className="lineview linecenter" />
                  <span className="titleview">Ghế trung tâm</span>
                </span>
                <span className="positionview">
                  <span className="lineview linebeautiful " />
                  <span className="titleview">Ghế Đẹp</span>
                </span>
              </div>
              {/* end ngIf: best_seat != '' */}
            </div>
          </div>
        </div>
        <div className="continuebuttonmobile row ng-scope">
          <div className="total col-xs-6">
            <p className="seatchosen ng-binding" />
          </div>
          {/* ngIf: fullchosen */}
          {/* ngIf: !fullchosen */}
          <div
            className="continuebutton disabled col-xs-6 ng-scope"
            ng-if="!fullchosen"
            disabled
          >
            TIẾP TỤC
          </div>
          {/* end ngIf: !fullchosen */}
        </div>
        <div
          className="modal fade ng-scope"
          id="seat-error-modal"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content seat-error-modal-content">
              <div className="modal-body seat-error-modal-body">
                <div className="seat-error-header">
                  <img src="app/assets/img/Post-notification.png" />
                </div>
                <div className="seat-error-content ng-binding" />
                <div
                  ng-click="closeErrorSeatModal()"
                  className="seat-error-footer"
                >
                  <span className="btn btnOk">OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
