import { Paper } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Route } from "react-router-dom";

export const NewHeader = () => {
  return (
    <div>
      <Paper elevation={5}>
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
                    e.preventDefault();
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
                    e.preventDefault();

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
                    e.preventDefault();

                    history.push("/contact");
                  }}
                >
                  Contact
                </a>
              </li>
            )}
          />
        </ul>
      </Paper>
    </div>
  );
};
