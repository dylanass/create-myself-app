import React from "react";
import BasicLayout from "@/components/Layouts/BasicLayout";
import { Redirect, Route, Switch } from "react-router-dom";
import BasicRouteConfig from "@/constants/BasicRouteConfig";

interface BasicPageProps {
  [key: string]: any;
}

const BasicPage = (props: BasicPageProps) => {
  let redirect = BasicRouteConfig.filter((v) => v.redirect);
  return (
    <BasicLayout>
      <Switch>
        {BasicRouteConfig.map((item) => (
          <Route path={item.path} key={item.path} component={item.component} />
        ))}
      </Switch>
      {redirect.map((v, i) => (
        <Redirect key={i} from={v.path} to={v.redirect} />
      ))}
    </BasicLayout>
  );
};

export default React.memo<BasicPageProps>(BasicPage);
