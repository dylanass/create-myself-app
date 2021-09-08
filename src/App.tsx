import "./App.scss";
import Router from "./view";
import "antd/dist/antd.css";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </div>
  );
}

export default App;
