import { combineReducers } from "redux";
import detailMoiveReducer from "../../HomeTemplete/DetailMoive/Modules/reducer";
import listMoiveReducer from "../../HomeTemplete/ListMoviePage/Modules/reducer";
import { QuanlyRapReducer } from "../actions/reducers/QuanLyRapReducer";

const rootReducer = combineReducers({
  listMoiveReducer,
  detailMoiveReducer,
  QuanlyRapReducer,
});
export default rootReducer;
