import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import About from "./Pages/About";
import Portfolio from "./Pages/Porfolio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Pages/Contact";
import ParticlesContainer from "./components/ParticlesContainer";

function App() {
  const [page, setPage] = useState("reg")

  const onPortClickHandler = () => {
    setPage("port")
  }
  const onElseClickHandler = () => {
    setPage("reg")
  }

  const particleSizeChanger = () =>{
    if(page === "reg"){
      return 900
    } else if(page === "port"){
      return 2000
    }
  }
  return (
    <Router>
      <div>
        <ParticlesContainer size={particleSizeChanger}/>
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
            <Header portClick={onPortClickHandler} elseClick={onElseClickHandler}/>
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
