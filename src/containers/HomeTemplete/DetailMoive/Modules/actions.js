import axios from "axios";
import * as ActionType from "./constants";

export const actFetchDetailMoive = (id) => {
  return (dispatch) => {
    dispatch(actDetailMoiveRequest());
    axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE4LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzU2MTYwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjQ3NzA5MjAwfQ.Gn_duD0LZ6aamu893NNv17QlXn6HTFtyfWIFAIMBjEM",
      },
    })
      .then((result) => {
        dispatch(actDetailMoiveSucces(result.data.content));
      })
      .catch((error) => {
        dispatch(actDetailMoiveFailed(error));
      });
  };
};

const actDetailMoiveRequest = () => {
  return {
    type: ActionType.DETAIL_MOIVE_REQUEST,
  };
};

const actDetailMoiveSucces = (data) => {
  return {
    type: ActionType.DETAIL_MOIVE_SUCCES,
    payload: data,
  };
};
const actDetailMoiveFailed = (error) => {
  return {
    type: ActionType.DETAIL_MOIVE_FAILED,
    payload: error,
  };
};
