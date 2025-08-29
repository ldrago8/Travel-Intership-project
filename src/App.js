import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu/Menu";
import Home from "./Pages/Home/Home";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Footer from "./Pages/Footer/Footer";
import Contact from './Pages/Contact/Contact';
import Hotels from './Pages/Hotels/Hotels';
import Gallery from "./Pages/Gallery/Gallery";
import News from "./Pages/News/News";
function App() {
  return (
   <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
         <Route path="/News" element={<News/>} />
      </Routes>
      <Footer />
   </>
  );
}

export default App;
