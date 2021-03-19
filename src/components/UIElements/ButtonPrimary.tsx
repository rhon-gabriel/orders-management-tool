import React, {FC} from "react";
import { Button } from "antd";
import styles from "./ButtonPrimary.module.scss";

type ButtonProps = {
  text: string;
};

const ButtonPrimary: FC<ButtonProps> = ({ text }) => {
  const button: string = styles.button;
  return (
    <Button type="primary" className={button}>
      {text}
    </Button>
  );
};

export default ButtonPrimary;
