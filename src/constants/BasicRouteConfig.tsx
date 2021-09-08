import LazyLoad from "@/components/LazyLoad";
import { Redirect } from "react-router-dom";

/**
 * @description 菜单栏路由枚举
 */
interface RouteItem {
  path: string;
  redirect?: string;
  exact?: boolean;
  component?: () => JSX.Element;
}

const BasicRouteConfig: RouteItem[] = [
  {
    path: "/basic/",
    exact: true,
    component: () => <Redirect to="/basic/table-list" />,
  },
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
  {
    path: "/basic/filter",
    component: () => <LazyLoad component={() => import("@/view/filter/Filter")} />,
  },
  {
    path: "/basic/scroll-animation",
    component: () => (
      <LazyLoad component={() => import("@/view/scroll-animation/ScrollAnimation")} />
    ),
  },
  {
    path: "/basic/audio",
    component: () => <LazyLoad component={() => import("@/view/audio/Audio")} />,
  },
  {
    path: "/basic/nav-animation",
    component: () => (
      <LazyLoad component={() => import("@/view/animated-navigation/AnimatedNavigation")} />
    ),
  },
  {
    path: "/basic/content-placeholder",
    component: () => (
      <LazyLoad component={() => import("@/view/content-placeholder/ContentPlaceholder")} />
    ),
  },
  {
    path: "/basic/tailwind-css",
    component: () => <LazyLoad component={() => import("@/view/tailwind-css/TailwindCss")} />,
  },
];

export default BasicRouteConfig;
