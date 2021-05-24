import { all } from "redux-saga/effects";
import ordersSaga from "../containers/Orders/redux/saga";

export default function* rootSaga() {
  yield all([ordersSaga()]);
}
