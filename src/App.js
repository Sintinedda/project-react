import React from "react";
import { Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";



import "./css/App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Realisation from "./Components/Realisation";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Notice from "./Components/Notice"


export default function App() {
  library.add(fas)
  return(
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/realisations" element={<Realisation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
      <Footer />
    </div>
  )
}


