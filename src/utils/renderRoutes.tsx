import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import memoize from "memoize-one";

function renderRoutes(routes) {
  return routes ? (
    <Switch>
      {[
        ...routes,
        // 处理没有路由的 404 页面
        {
          component: () => <Redirect to="/error/404" />,
        },
      ].map((route, i) => {
        if (!route) {
          return null;
        }
        const { component: Component, ...rest } = route;
        return (
          <Route
            {...rest}
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={(props) => {
              return (
                <>
                  {route.render ? (
                    route.render({ ...props, route })
                  ) : (
                    <route.component {...props} route={route} />
                  )}
                </>
              );
            }}
          />
        );
      })}
    </Switch>
  ) : null;
}

export default renderRoutes;
