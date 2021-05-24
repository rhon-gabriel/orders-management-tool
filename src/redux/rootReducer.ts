import { combineReducers } from "redux";
import ordersReducer from "../containers/Orders/redux/reducer";

const rootReducer = combineReducers({
  orders: ordersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;