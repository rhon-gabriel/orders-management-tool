import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./redux/actions";
import { AppState } from "../../redux/rootReducer";
import OrdersCard from "./OrdersCard/OrdersCard";
import SpinLoader from "../../components/UIElements/SpinLoader/SpinLoader";
import styles from "./Orders.module.scss";
import { Alert } from "antd";

const Orders: FC = () => {
  const dispatch = useDispatch();

  const getOrders = (state: AppState) => state.orders;
  const { loading, orders, error } = useSelector(getOrders);

  useEffect(() => {
    dispatch(actions.getOrdersStart());
  }, []); // eslint-disable-line

  return (
    <div className={styles.container}>
      {error && <Alert message="Something went wrong" type="error" />}
      {loading ? <SpinLoader /> : <OrdersCard results={orders} />}
    </div>
  );
};

export default Orders;
