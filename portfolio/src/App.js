import React from "react";
import Header from './components/Header'
import Container from './components/Container'
import About from "./Pages/About";
import Portfolio from "./Pages/Porfolio";




function App() {
  return (
    <Container>
      <Header/>
      <About/>
      <Portfolio/>
    </Container>
  );
}

export default App;
