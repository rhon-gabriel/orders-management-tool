import {
  GET_ORDERS_START,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
} from "./actionTypes";

export interface IOrder {
  id: number;
  status: string;
  eta: string;
  parcel_id: string;
  sender: string;
  verification_required: boolean;
  location_id: string;
  location_name: string;
  location_coordinate_latitude: number;
  location_coordinate_longitude: number;
  location_status_ok: boolean;
  user_phone: number;
  user_name: string;
  notes: string;
  last_updated: string;
}

export interface OrdersState {
  loading: boolean;
  orders: IOrder[];
  error: string | null;
}

export interface GetOrdersSuccessPayload {
  orders: IOrder[];
}

export interface GetOrdersFailurePayload {
  error: string;
}

export interface GetOrdersStart {
  type: typeof GET_ORDERS_START;
}

export type GetOrdersSuccess = {
  type: typeof GET_ORDERS_SUCCESS;
  payload: GetOrdersSuccessPayload;
};

export type GetOrdersFailure = {
  type: typeof GET_ORDERS_FAILURE;
  payload: GetOrdersFailurePayload;
};

export type OrdersActions =
  | GetOrdersStart
  | GetOrdersSuccess
  | GetOrdersFailure;
