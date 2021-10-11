import { combineReducers } from "redux";
import detailMoiveReducer from "../../HomeTemplete/DetailMoive/Modules/reducer";
import listMoiveReducer from "../../HomeTemplete/ListMoviePage/Modules/reducer";

const rootReducer = combineReducers({
  listMoiveReducer,
  detailMoiveReducer,
});
export default rootReducer;
