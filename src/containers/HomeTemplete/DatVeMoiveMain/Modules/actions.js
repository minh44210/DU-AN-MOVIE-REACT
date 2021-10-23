import * as ActionType from "./constants";
import api from "../../../redux/util/config";
import { Redirect } from "react-router";
import axios from "axios";

export const actMoiveMainApi = (id) => {
  return (dispatch) => {
    dispatch(actMoiveMainRequest());
    axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE4LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzU2MTYwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjQ3NzA5MjAwfQ.Gn_duD0LZ6aamu893NNv17QlXn6HTFtyfWIFAIMBjEM",
      },
    })
      .then((result) => {
        dispatch(actMoiveMainSucces(result.data.content));
      })

      .catch((error) => {
        dispatch(actMoiveMainFailed(error));
      });
  };
};

export const actMoiveMainRequest = () => {
  return {
    type: ActionType.DATVE_MOIVEMAIN_REQUEST,
  };
};

export const actMoiveMainSucces = (data) => {
  return {
    type: ActionType.DATVE_MOIVEMAIN_SUCCES,
    payload: data,
  };
};
export const actMoiveMainFailed = (error) => {
  return {
    type: ActionType.DATVE_MOIVEMAIN_FAILED,
    payload: error,
  };
};
export const actMoiveMainDatVe = (data) => {
  return {
    type: ActionType.DATVE_MOIVEMAIN_DATVE,
    payload: data,
  };
};
