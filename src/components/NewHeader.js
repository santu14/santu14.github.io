import { Paper } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { List, ListItem, Button, ListItemText } from "@material-ui/core";
export const NewHeader = () => {
  const navLinks = [
    { title: `About`, path: `/about` },
    { title: `Porfolio`, path: `/portfolio` },
    { title: `Contact`, path: `/contact` },
  ];
  const prevent =(e)=> {
    e.preventDefault()
  }
  return (
    <div>
      <Paper elevation={5}>
        <div className="typewriter">
          <h1>Hello, my name is Santiago Solana.</h1>
        </div>
        <List
          component="nav"
          aria-labelledby="main navigation"
          // className={classes.linkDisplay}
        >
          {navLinks.map(({ title, path }) => (
           
            <Button  component={Link} to={path} key={title}  style={{}}>
              <ListItem button>
                <ListItemText primary={title} />
              </ListItem>
            </Button>
          ))}
        </List>
        {/* <ul className="nav justify-content-center">
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
                  
                >
                  Contact
                </a>
              </li>
            )}
          />
        </ul> */}
      </Paper>
    </div>
  );
};
