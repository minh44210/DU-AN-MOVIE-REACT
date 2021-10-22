import * as ActionType from "./constants";
import api from "../../../redux/util/config";
import { Redirect } from "react-router";

export const actUserRegHomeaApi = (user, history) => {
  return (dispatch) => {
    dispatch(actUserRegRequest());
    api
      .post("QuanLyNguoiDung/DangKy", user)
      .then((result) => {
        dispatch(actUserRegSucces(result.data.content));
        if (result.data.content) {
          dispatch(actUserRegSucces(result.data.content));

          return history.replace("/login");
        }
      })

      .catch((error) => {
        dispatch(actUserRegFailed(error));
      });
  };
};

export const actUserRegRequest = () => {
  return {
    type: ActionType.USER_REG_REQUEST,
  };
};

export const actUserRegSucces = (data) => {
  return {
    type: ActionType.USER_REG_SUCCES,
    payload: data,
  };
};
export const actUserRegFailed = (error) => {
  return {
    type: ActionType.USER_REG_FAILED,
    payload: error,
  };
};
