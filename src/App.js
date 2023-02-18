import React from "react";
import Main from "./components/Main";
import About from "./components/About";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Main/>
      <About />
      {/* <Cards /> */}
      <Footer />
    </div>
  );
}


export default App;
