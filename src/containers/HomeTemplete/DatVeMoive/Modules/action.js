import axios from "axios";
import * as ActionType from "./constants";

export const actFetchDatVeMoive = (id) => {
  return (dispatch) => {
    dispatch(actFetchDatVeMoiveRequest());
    axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP08`,
      GET: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE4LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzU2MTYwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjQ3NzA5MjAwfQ.Gn_duD0LZ6aamu893NNv17QlXn6HTFtyfWIFAIMBjEM",
      },
    })
      .then((result) => {
        dispatch(actDatVeMoiveSucces(result.data.content));
        console.log(result);
      })
      .catch((error) => {
        dispatch(actDatVeMoiveFailed(error));
      });
  };
};
const actFetchDatVeMoiveRequest = () => {
  return {
    type: ActionType.DATVE_MOIVE_REQUEST,
  };
};

const actDatVeMoiveSucces = (data) => {
  return {
    type: ActionType.DATVE_MOIVE_SUCCESS,
    payload: data,
  };
};
const actDatVeMoiveFailed = (error) => {
  return {
    type: ActionType.DATVE_MOIVE_FAILED,
    payload: error,
  };
};
