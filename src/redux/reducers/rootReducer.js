import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import shopReducers from "./shopReducers";
import homepage1Reducer from "./homepage1Reducer";
const rootReducer = combineReducers({
  cartReducer,
  wishlistReducer,
  shopReducers,
  homepage1Reducer,
});

export default rootReducer;
