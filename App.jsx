import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
     <div>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <TechStack/>
      <Contact/>
      <Footer/>
    </div>
    
    </>
  )
}