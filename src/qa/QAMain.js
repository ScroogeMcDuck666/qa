import React from "react";
import { Layout, Menu } from "antd";
import "./QAMain.css";
import TestList from "./test/TestList";
import GroupList from "./group/GroupList";
import { Button } from "antd";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UngroupOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content, Footer } = Layout;

const QAMain = () => {
  const testList = [
    { name: "test 1", description: "Тест про функциональное тест..." },
    { name: "test 2", description: "Тест про регрессионное тест..." },
    { name: "test 3", description: "Тест про основы тест..." },
    { name: "test 4", description: "Тест про пивное тест..." },
    { name: "test 5", description: "Тест про винное тест..." },
  ];

  const [isCollapsed, setCollapsed] = React.useState(false);
  const [key, setKey] = React.useState(1);

  const toggle = () => {
    setCollapsed(!isCollapsed);
  };

  const onCreateTestModel = () => {
    console.log("onCreateTestModel clicked...");
  };

  const handleMenuItem = (values) => {
    setKey(values.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="1"
            icon={<UngroupOutlined />}
            onClick={handleMenuItem}
          >
            My Tests
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />} onClick={handleMenuItem}>
            My Groups
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<VideoCameraOutlined />}
            onClick={handleMenuItem}
          >
            My Services
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "25px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Button type="dashed" onClick={onCreateTestModel}>
            Create test
          </Button>

          {key == 1 ? <TestList testList={testList} /> : <GroupList />}
        </Content>
        <Footer style={{ textAlign: "center" }}>Pivas Samara group</Footer>
      </Layout>
    </Layout>
  );
};

export default QAMain;
