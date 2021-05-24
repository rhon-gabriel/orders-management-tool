import React, { FC } from "react";
import Orders from "../Orders/Orders";
import Header from "../Header/Header";
import { Layout } from "antd";

const AppContainer: FC = () => {
  return (
    <Layout>
      <Layout.Header
        style={{
          backgroundColor: "#182848",
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Header />
      </Layout.Header>
      <Layout.Content
        style={{
          marginTop: 50,
          minHeight: "100vh",
          backgroundColor: "#e2e2e2",
        }}
      >
        <Orders />
      </Layout.Content>
    </Layout>
  );
};

export default AppContainer;
