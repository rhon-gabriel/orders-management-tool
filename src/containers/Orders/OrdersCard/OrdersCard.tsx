import React, { FC } from "react";
import styles from "./OrdersCard.module.scss";
import { Divider, Row, Col, Tag } from "antd";
import { IOrder } from "../redux/types";
import { statusCheck, statusEmoji } from "../../../components/utilities/Status";
import moment from "moment";

type Props = {
  results: IOrder[];
};

const OrdersCard: FC<Props> = ({ results }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Orders</h1>
      <div className={styles.cardContainer}>
        <Row gutter={[16, 16]}>
          {results &&
            results.map((order) => {
              return (
                <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div key={order.id} className={styles.card}>
                    <Tag color="cyan" className={styles.tag}>
                      {order.location_name}
                    </Tag>
                    <div className={styles.sender}>{order.sender}</div>
                    <div className={styles.emoji}>
                      {statusEmoji(order.status)}
                    </div>
                    <div className={styles.subHeader}>
                      {statusCheck(order.status)}
                    </div>
                    {order.eta !== null && (
                      <div
                        className={styles.contentValue}
                        style={{ textAlign: "center" }}
                      >
                        {`Eta:
                          ${moment(order.eta).format("L")}`}
                      </div>
                    )}
                    <div className={styles.contentBottom}>
                      <div className={styles.contentKey}>
                        Delivery Information
                      </div>
                      <Divider />
                      <div className={styles.contentValue}>
                        {`Recipient: ${order.user_name}`}
                      </div>
                      <div className={styles.contentValue}>
                        {order.verification_required
                          ? `Identification required`
                          : `No identification required`}
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

export default OrdersCard;
