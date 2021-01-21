import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import About from "./Pages/About";
import Portfolio from "./Pages/Porfolio";
import Contact from "./Pages/Contact";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ParticlesContainer from "./components/ParticlesContainer";
import "./Style.css";
function App() {
  
  const location = useLocation();
  
  return (
    
      <div>
        <ParticlesContainer />
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

            {/* <Portfolio />

            <Contact /> */}

            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                
                  <Route exact path="/" component={About} />
                
                
                  <Route exact path="/about" component={About} />
               
                
                  <Route exact path="/portfolio" component={Portfolio} />
               
                  <Route exact path="/contact" component={Contact} />
                
              </Switch>
            </AnimatePresence>
          </Container>
        </div>
      </div>
    
  );
}

export default App;
