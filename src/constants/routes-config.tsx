import LazyLoad from "@/components/LazyLoad";

const routes = [
  {
    path: "/basic",
    component: <LazyLoad component={() => import("@/view/basic")} />,
    // children: [
    //   {
    //     path: "/home/composition",
    //     component: Composition,
    //   },
    //   {
    //     path: "/home/flows",
    //     component: Flows,
    //     auth: true,
    //   },
    //   {
    //     path: "/home/user",
    //     component: User,
    //     auth: true,
    //   },
    //   {
    //     path: "/home/source",
    //     component: Source,
    //     auth: true,
    //   },
    //   {
    //     path: "/home",
    //     redirect: "/home/composition",
    //   },
    // ],
  },
  {
    path: "/login",
    component: <LazyLoad component={() => import("@/view/login")} />,
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    //没有path 导入404页面
    component: <LazyLoad component={() => import("@/view/not-found-page/NotFoundPage")} />,
  },
];

export default routes;
