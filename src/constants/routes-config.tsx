import LazyLoad from "@/components/LazyLoad";
import NotFoundPage from "@/view/not-found-page/NotFoundPage";
import { Redirect } from "react-router-dom";
import BasicRouteConfig from "./BasicRouteConfig";

const routes = [
  {
    path: "/basic",
    //有routes 不能开严格模式
    // exact: true,
    component: (props) => <LazyLoad {...props} component={() => import("@/view/basic")} />,
    routes: BasicRouteConfig,
  },
  {
    path: "/login",
    exact: true,
    component: () => <LazyLoad component={() => import("@/view/login")} />,
  },
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/login" />,
  },
  {
    //没有path 导入404页面
    path: "/404",
    component: () => <NotFoundPage />,
  },
  {
    component: () => <Redirect to="/404" />,
  },
];

export default routes;
