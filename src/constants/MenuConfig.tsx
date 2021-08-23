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
    key: "workList",
    name: "workList",
    keyPath: "/basic/work-list",
    icon: <DatabaseOutlined />,
  },
  {
    key: "tableList",
    name: "tableList",
    keyPath: "/basic/table-list",
    icon: <BarsOutlined />,
  },
];

export default MenuConfig;
