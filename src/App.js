import React from "react";
import { Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotfound"
import Watches from "./pages/Watches";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
      <Route path="/watches" element={<Watches/>}/>
    </Routes>
  );
} 

export default App;
