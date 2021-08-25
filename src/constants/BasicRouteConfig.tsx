import TableList from "@/view/tableList/TableList";
import BraftEditor from "@/view/braftEditor/BraftEditor";

interface RouteItem {
  path: string;
  component: () => JSX.Element;
}

const BasicRouteConfig: RouteItem[] = [
  {
    path: "/basic/table-list",
    component: () => <TableList />,
  },
  {
    path: "/basic/braft-editor",
    component: () => <BraftEditor />,
  },
];

export default BasicRouteConfig;
