import React from "react";
import { Routes, Route } from "react-router-dom";

import "./css/App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Realisation from "./Components/Realisation"


export default function App() {
  return(
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/realisations" element={<Realisation />} />
      </Routes>
      <Footer />
    </div>
  )
}


