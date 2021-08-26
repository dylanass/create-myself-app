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
];

export default MenuConfig;
