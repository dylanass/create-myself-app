import LazyLoad from "@/components/LazyLoad";

interface RouteItem {
  path: string;
  component: () => JSX.Element;
}

const BasicRouteConfig: RouteItem[] = [
  {
    path: "/basic/table-list",
    component: () => (
      <LazyLoad component={() => import("@/view/tableList/TableList")} />
    ),
  },
  {
    path: "/basic/braft-editor",
    component: () => (
      <LazyLoad component={() => import("@/view/braftEditor/BraftEditor")} />
    ),
  },
];

export default BasicRouteConfig;
