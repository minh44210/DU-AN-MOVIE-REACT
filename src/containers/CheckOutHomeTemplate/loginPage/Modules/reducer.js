import * as ActionType from "./constants";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const UserLoginHomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.USER_LOGIN_SUCCES:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.USER_LOGIN_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default UserLoginHomeReducer;
