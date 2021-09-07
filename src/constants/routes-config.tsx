import LazyLoad from "@/components/LazyLoad";
import NotFoundPage from "@/view/not-found-page/NotFoundPage";
import { Redirect } from "react-router-dom";

const routes = [
  // {
  //   path: "/basic",
  //   exact: true,
  //   component: <LazyLoad component={() => import("@/view/basic")} />,
  //   children: [
  //     {
  //       path: "/home/composition",
  //       component: Composition,
  //     },
  //     {
  //       path: "/home/flows",
  //       component: Flows,
  //       auth: true,
  //     },
  //     {
  //       path: "/home/user",
  //       component: User,
  //       auth: true,
  //     },
  //     {
  //       path: "/home/source",
  //       component: Source,
  //       auth: true,
  //     },
  //     {
  //       path: "/home",
  //       redirect: "/home/composition",
  //     },
  //   ],
  // },
  {
    path: "/login",
    exact: true,
    component: () => <LazyLoad component={() => import("@/view/login")} />,
  },
  // {
  //   path: "/",
  //   exact: true,
  //   component: <Redirect to="/login" />,
  // },
  // {
  //   //没有path 导入404页面
  //   component: <NotFoundPage />,
  // },
];

export default routes;
