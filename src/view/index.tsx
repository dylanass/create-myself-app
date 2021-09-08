import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "@/constants/routes-config";
import renderRoutes from "@/utils/renderRoutes";

export default React.memo(() => <Router>{renderRoutes(routes)}</Router>);
