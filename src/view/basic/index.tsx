import React from "react";
import BasicLayout from "@/components/Layouts/BasicLayout";
import renderRoutes from "@/utils/renderRoutes";

interface BasicPageProps {
  [key: string]: any;
}

const BasicPage = ({ route, ...props }: BasicPageProps) => {
  return <BasicLayout>{renderRoutes(route.routes)}</BasicLayout>;
};

export default React.memo<BasicPageProps>(BasicPage);
