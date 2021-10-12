import { combineReducers } from "redux";
import datVeMoiveReducer from "../../HomeTemplete/DatVeMoive/Modules/reducer";
import detailMoiveReducer from "../../HomeTemplete/DetailMoive/Modules/reducer";
import listMoiveReducer from "../../HomeTemplete/ListMoviePage/Modules/reducer";
import { QuanlyRapReducer } from "../actions/reducers/QuanLyRapReducer";

const rootReducer = combineReducers({
  listMoiveReducer,
  detailMoiveReducer,
  datVeMoiveReducer,
  QuanlyRapReducer,
});
export default rootReducer;
