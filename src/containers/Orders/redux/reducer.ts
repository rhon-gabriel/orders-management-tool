import {
  GET_ORDERS_START,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
} from "./actionTypes";

import { OrdersActions, OrdersState } from "./types";

export const initialState: OrdersState = {
  loading: false,
  orders: [],
  error: null,
};

export default (state = initialState, action: OrdersActions) => {
  switch (action.type) {
    case GET_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload.orders,
        error: null,
      };
    case GET_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        orders: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
