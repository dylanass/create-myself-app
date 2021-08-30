import { DatabaseOutlined, BarsOutlined } from "@ant-design/icons";

interface MenuItem {
  key: string;
  name: string;
  icon: JSX.Element;
  keyPath?: string;
  children?: MenuItem[];
}

const MenuConfig: MenuItem[] = [
  {
    key: "braftEditor",
    name: "braftEditor",
    keyPath: "/basic/braft-editor",
    icon: <DatabaseOutlined />,
  },
  {
    key: "tableList",
    name: "tableList",
    keyPath: "/basic/table-list",
    icon: <BarsOutlined />,
  },
  {
    key: "antdRadio",
    name: "antdRadio",
    icon: <BarsOutlined />,
    keyPath: "/basic/antd-radio",
  },
  {
    key: "stringJs",
    name: "stringJs",
    icon: <BarsOutlined />,
    keyPath: "/basic/string-js",
  },
  {
    key: "voca",
    name: "voca",
    icon: <BarsOutlined />,
    keyPath: "/basic/voca",
  },
  {
    key: "qs",
    name: "qs",
    icon: <BarsOutlined />,
    keyPath: "/basic/qs",
  },
  {
    key: "flex-card",
    name: "扩展卡片",
    icon: <BarsOutlined />,
    keyPath: "/basic/flex-card",
  },
  {
    key: "progress-step",
    name: "步骤条",
    icon: <BarsOutlined />,
    keyPath: "/basic/progress-step",
  },
  {
    key: "rotate",
    name: "旋转",
    icon: <BarsOutlined />,
    keyPath: "/basic/rotate",
  },
];

export default MenuConfig;
