import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import styles from "./HomePage.module.scss";

const HomePage: FC = () => {
  return (
    <Row className={styles.container}>
      <Col span={24}>
        <Link to="/orders">
          <div className={styles.btnContainer}>
            <Button type="text">Go to orders</Button>
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default HomePage;
