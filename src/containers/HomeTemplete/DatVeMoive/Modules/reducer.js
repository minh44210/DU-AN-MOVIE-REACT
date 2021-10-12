import * as ActionType from "./constants";

const innitialState = {
  loading: false,
  data: null,
  error: null,
};

const datVeMoiveReducer = (state = innitialState, action) => {
  switch (action.type) {
    case ActionType.DATVE_MOIVE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.DATVE_MOIVE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.DATVE_MOIVE_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default datVeMoiveReducer;
