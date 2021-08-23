import App from "@/App";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
