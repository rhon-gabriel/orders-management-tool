import {
  GET_ORDERS_START,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
} from "./actionTypes";

import {
  GetOrdersStart,
  GetOrdersSuccess,
  GetOrdersSuccessPayload,
  GetOrdersFailure,
  GetOrdersFailurePayload,
} from "./types";

export const getOrdersStart = (): GetOrdersStart => ({
  type: GET_ORDERS_START,
});

export const getOrdersSuccess = (
  payload: GetOrdersSuccessPayload
): GetOrdersSuccess => ({
  type: GET_ORDERS_SUCCESS,
  payload,
});

export const getOrdersFailure = (
  payload: GetOrdersFailurePayload
): GetOrdersFailure => ({
  type: GET_ORDERS_FAILURE,
  payload,
});
