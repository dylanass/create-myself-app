import App from "@/App";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "@/view/login";
import BasicPage from "@/view/basic";
import NotFound from "@/view/not-found-page/NotFoundPage";
import routes from "@/constants/routes-config";
import renderRoutes from "@/utils/renderRoutes";

export default React.memo(function index() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={App}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/basic" component={BasicPage} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Route> */}

        {/**
         * @todo map routes 报错
         */}
        {routes.map((v: any, i: number) => {
          return (
            <Route
              path={v.path}
              key={i}
              render={(props) => {
                // return <div>123</div>;
                console.log("v.component :>> ", v.component);
                return <v.component {...props}></v.component>;
              }}
            />
          );
        })}
      </Switch>
    </Router>
  );
});

// export default React.memo(() => <Router>{renderRoutes(routes)}</Router>);
