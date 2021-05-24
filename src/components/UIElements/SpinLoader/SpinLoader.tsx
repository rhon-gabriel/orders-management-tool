import React, {FC} from "react";
import { Spin } from "antd";
import styles from "./SpinLoader.module.scss";

const SpinLoader: FC = () => (
  <div className={styles.container}>
    <Spin />
  </div>
);

export default SpinLoader;
