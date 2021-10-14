import { HE_THONG_RAP } from "../QuanLyRapType";

const stateDefault = {
  heThongRapChieu: [],
};

export const QuanlyRapReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case HE_THONG_RAP: {
      state.heThongRapChieu = action.heThongRapChieu;
      return { ...state };
    }
    default:
      return { ...state };
      break;
  }
};
