import React from "react";
import BasicLayout from "@/components/BasicLayout";
import { Route, Switch } from "react-router-dom";
import BasicRouteConfig from "@/constants/BasicRouteConfig";

interface BasicPageProps {
  [key: string]: any;
}

const BasicPage = (props: BasicPageProps) => {
  return (
    <BasicLayout>
      <Switch>
        {BasicRouteConfig.map((item) => (
          <Route path={item.path} key={item.path} component={item.component} />
        ))}
      </Switch>
    </BasicLayout>
  );
};

export default React.memo<BasicPageProps>(BasicPage);
