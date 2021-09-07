import React from "react";
import "./App.scss";
import Router from "./view";
import "antd/dist/antd.css";
import { HelmetProvider } from "react-helmet-async";
import { Spin } from "antd";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={Spin}>
        <HelmetProvider>
          <Router />
        </HelmetProvider>
      </React.Suspense>
    </div>
  );
}

export default App;
