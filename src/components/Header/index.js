import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Header(props) {
  return (
    <div className="card justify-content-center header-card">
      <div className="typewriter">
        <h1>Hello, my name is Santiago Solana.</h1>
      </div>
      <ul className="nav justify-content-center">
        <Route
          render={({ history }) => (
            <li className="nav-item">
              <a
                className="nav-link about"
                onClick={(e) => {
                  e.preventDefault()
                  history.push("/about");
                }}
              >
                About
              </a>
            </li>
          )}
        />

        <li className="nav-item">
          <h1 className="divider">|</h1>
        </li>

        <Route
          render={({ history }) => (
            <li className="nav-item">
              <a
                className="nav-link about"
                onClick={(e) => {
                  e.preventDefault()

                  history.push("/portfolio");
                }}
              >
                Portfolio
              </a>
            </li>
          )}
        />

        <li className="nav-item">
          <h1 className="divider">|</h1>
        </li>

        <Route
          render={({ history }) => (
            <li className="nav-item">
              <a
                className="nav-link about"
                onClick={(e) => {
                  e.preventDefault()

                  history.push("/contact");
                }}
              >
                Contact
              </a>
            </li>
          )}
        />
      </ul>
    </div>
  );
}

export default Header;
