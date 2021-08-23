import React, { useState, useCallback } from "react";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import MenuConfig from "@/constants/MenuConfig";
import { useHistory } from "react-router-dom";

const { Header, Sider, Content } = Layout;

interface BasicLayoutProps {
  [key: string]: any;
}

const BasicLayout = ({ children, ...props }: BasicLayoutProps) => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const handleToggle = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  const handleClickMenu = useCallback((keyPath: string) => {
    history.push(keyPath);
  }, []);
  
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[MenuConfig[0].key]}
        >
          {MenuConfig.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => handleClickMenu(item.keyPath)}
            >
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: handleToggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default React.memo<BasicLayoutProps>(BasicLayout);
