import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWorks from "./Components/MyWorks/MyWorks";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <MyWorks></MyWorks>
    </div>
  );
};

export default App;
