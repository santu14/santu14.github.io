import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesContainer from "./components/ParticlesContainer";

ReactDOM.render(
  <div>
        <ParticlesContainer heigt="100%" />

    <Router>
      <App />
    </Router>
  </div>,
  document.getElementById("root")
);
