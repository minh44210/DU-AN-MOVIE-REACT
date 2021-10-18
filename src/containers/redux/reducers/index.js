import { combineReducers } from "redux";
import UserLoginHomeReducer from "../../CheckOutHomeTemplate/loginPage/Modules/reducer";
import detailMoiveReducer from "../../HomeTemplete/DetailMoive/Modules/reducer";
import listMoiveReducer from "../../HomeTemplete/ListMoviePage/Modules/reducer";
import { QuanlyRapReducer } from "../actions/reducers/QuanLyRapReducer";
import authReducer from "./../../AdminTemplate/AuthPage/modules/reducer";
// STORE TỔNG
const rootReducer = combineReducers({
  listMoiveReducer,
  detailMoiveReducer,
  QuanlyRapReducer,
  authReducer,
  UserLoginHomeReducer,
});
export default rootReducer;
