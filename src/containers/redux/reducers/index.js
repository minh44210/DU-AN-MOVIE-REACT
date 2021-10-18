import { combineReducers } from "redux";
import UserLoginHomeReducer from "../../CheckOutHomeTemplate/loginPage/Modules/reducer";
import detailMoiveReducer from "../../HomeTemplete/DetailMoive/Modules/reducer";
import listMoiveReducer from "../../HomeTemplete/ListMoviePage/Modules/reducer";
import { QuanlyRapReducer } from "../actions/reducers/QuanLyRapReducer";
// STORE TỔNG
const rootReducer = combineReducers({
  listMoiveReducer,
  detailMoiveReducer,
  QuanlyRapReducer,
  UserLoginHomeReducer,
});
export default rootReducer;
