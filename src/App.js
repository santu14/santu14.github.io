import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import About from "./Pages/About";
import Portfolio from "./Pages/Porfolio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Pages/Contact";
import ParticlesContainer from "./components/ParticlesContainer";

function App() {
 
  return (
    <Router>
      <div>
        <ParticlesContainer/>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Container>
            <Header />
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/portfolio">
                
                <Portfolio />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;
