import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const detailMoiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DETAIL_MOIVE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.DETAIL_MOIVE_SUCCES:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.DETAIL_MOIVE_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default detailMoiveReducer;
