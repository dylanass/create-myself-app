import App from "@/App";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "@/view/login";
import BasicPage from "@/view/basic";
import NotFound from "@/view/not-found-page/NotFoundPage";

export default function index() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/basic" component={BasicPage} />
            {/**
             * @todo 404 或匹配不到 跳转到 NotFound
             */}
            <Route path="/404" component={NotFound} />
            {/* <Route component={NotFound} /> */}
            <Redirect to="/404" />
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
