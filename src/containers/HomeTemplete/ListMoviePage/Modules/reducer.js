import * as ActionType from "./constants";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const listMoiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_MOIVE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.LIST_MOIVE_SUCCES:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.LIST_MOIVE_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default listMoiveReducer;
