import TableList from "@/view/tableList/TableList";
import WorkList from "@/view/workList/WorkList";

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
    path: "/basic/work-list",
    component: () => <WorkList />,
  },
];

export default BasicRouteConfig;
