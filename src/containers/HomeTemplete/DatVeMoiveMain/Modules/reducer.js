import * as ActionType from "./constants";

const initialState = {
  data: null,
  dataDatVe: [],
  loading: false,
  error: null,
};

const MoiveMainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DATVE_MOIVEMAIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.DATVE_MOIVEMAIN_SUCCES:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.DATVE_MOIVEMAIN_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    case ActionType.DATVE_MOIVEMAIN_DATVE:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default MoiveMainReducer;
