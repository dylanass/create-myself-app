import { Switch, Route } from "react-router-dom";
import memoize from "memoize-one";

function renderRoutes(routes) {
  return routes ? (
    <Switch>
      {routes.map((route, i) => {
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
              if (route.routes) {
                return <Component {...props} route={route}></Component>;
              }
              return <Component {...props}></Component>;
            }}
          />
        );
      })}
    </Switch>
  ) : null;
}

export default memoize(renderRoutes);
