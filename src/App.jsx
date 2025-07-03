import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWorks from "./Components/MyWorks/MyWorks";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <MyWorks></MyWorks>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
