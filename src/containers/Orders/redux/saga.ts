import { all, call, put, takeLatest } from "redux-saga/effects";

import { getOrdersFailure, getOrdersSuccess } from "./actions";
import { GET_ORDERS_START } from "./actionTypes";
import {getOrders} from '../../../helpers/api'

function* getOrdersSaga() {
  try {
    const {
      data: { orders },
    } = yield call(getOrders);
    yield put(
      getOrdersSuccess({
        orders: orders,
      })
    );
  } catch (error) {
    yield put(
      getOrdersFailure({
        error: error
      })
    );
  }
}

function* ordersSaga() {
  yield all([takeLatest(GET_ORDERS_START, getOrdersSaga)]);
}

export default ordersSaga;
