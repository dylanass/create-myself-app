import LazyLoad from "@/components/LazyLoad";

interface RouteItem {
  path: string;
  component: () => JSX.Element;
}

const BasicRouteConfig: RouteItem[] = [
  {
    path: "/basic/table-list",
    component: () => <LazyLoad component={() => import("@/view/tableList/TableList")} />,
  },
  {
    path: "/basic/braft-editor",
    component: () => <LazyLoad component={() => import("@/view/braft-editor/BraftEditor")} />,
  },
  {
    path: "/basic/antd-radio",
    component: () => <LazyLoad component={() => import("@/view/antd-radio/Radio")} />,
  },
  {
    path: "/basic/string-js",
    component: () => <LazyLoad component={() => import("@/view/deal-string-method/StringJs")} />,
  },
  {
    path: "/basic/voca",
    component: () => <LazyLoad component={() => import("@/view/deal-string-method/Voca")} />,
  },
  {
    path: "/basic/qs",
    component: () => <LazyLoad component={() => import("@/view/qs-module/Qs")} />,
  },
  {
    path: "/basic/flex-card",
    component: () => <LazyLoad component={() => import("@/view/flex-card/FlexCard")} />,
  },
  {
    path: "/basic/progress-step",
    component: () => <LazyLoad component={() => import("@/view/progress-step/ProgressStep")} />,
  },
  {
    path: "/basic/rotate",
    component: () => <LazyLoad component={() => import("@/view/rotate/Rotate")} />,
  },
  {
    path: "/basic/search-input",
    component: () => <LazyLoad component={() => import("@/view/search-input/SearchInput")} />,
  },
];

export default BasicRouteConfig;
