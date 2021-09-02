import App from "@/App";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "@/view/login";
import BasicPage from "@/view/basic";

export default function index() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/basic" component={BasicPage} />
            <Redirect to="/login" />
            {/**
             * @todo 404 或匹配不到 跳转到 NotFound
             */}
            {/* <Route path="/404" component={NotFound} />
            <Route component={NotFound} /> */}
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
