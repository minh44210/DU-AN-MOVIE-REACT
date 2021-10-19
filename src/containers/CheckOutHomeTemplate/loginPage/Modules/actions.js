import * as ActionType from "./constants";
import api from "../../../redux/util/config";
import { Redirect } from "react-router";

export const actUserLoginHomeaApi = (user, history) => {
  return (dispatch) => {
    dispatch(actUserLoginRequest());
    api
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        // Redirect
        history.replace("/home");
        dispatch(actUserLoginSucces(result.data.content));
      })
      .catch((error) => {
        dispatch(actUserLoginFailed(error));
      });
  };
};

export const actUserLoginRequest = () => {
  return {
    type: ActionType.USER_LOGIN_REQUEST,
  };
};

export const actUserLoginSucces = (data) => {
  return {
    type: ActionType.USER_LOGIN_SUCCES,
    payload: data,
  };
};
export const actUserLoginFailed = (error) => {
  return {
    type: ActionType.USER_LOGIN_FAILED,
    payload: error,
  };
};
