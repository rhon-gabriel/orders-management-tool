import React, { FC } from "react";
import { Button } from "antd";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <Button type="text" className={styles.button}>
          Home
        </Button>
      </Link>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/rhoneilgabriel/"
        className={styles.link}
      >
        Rhoneil Gabriel
      </a>
    </div>
  );
};

export default Header;
