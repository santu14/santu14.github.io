import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import About from "./Pages/About";
import Portfolio from "./Pages/Porfolio";
import Contact from "./Pages/Contact";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
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
  // const location = useLocation();
  // console.log(location.pathname);
  return (
    <Router>
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

            <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                opacity:0
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 3.5
                }

              },
            }}> 
            
              <About />
            </motion.div>
            
           
              <Portfolio />
         
              <Contact />
        

            {/* <Switch >
              <Route exact path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
            </Switch> */}
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;
