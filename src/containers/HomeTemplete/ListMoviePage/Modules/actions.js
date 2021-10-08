import * as ActionType from "./constants";

export const actListMoiveRequest = () => {
  return {
    type: ActionType.LIST_MOIVE_REQUEST,
  };
};

export const actListMoiveSucces = (data) => {
  return {
    type: ActionType.LIST_MOIVE_SUCCES,
    payload: data,
  };
};
export const actListMoiveFailed = (error) => {
  return {
    type: ActionType.LIST_MOIVE_FAILED,
    payload: error,
  };
};
