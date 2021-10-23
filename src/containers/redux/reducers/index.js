import { combineReducers } from "redux";
import UserLoginHomeReducer from "../../CheckOutHomeTemplate/loginPage/Modules/reducer";
import UserRegHomeReducer from "../../CheckOutHomeTemplate/RegisterPage/Modules/reducer";
import MoiveMainReducer from "../../HomeTemplete/DatVeMoiveMain/Modules/reducer";
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
  UserRegHomeReducer,
  MoiveMainReducer,
});
export default rootReducer;
