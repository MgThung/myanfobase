import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Beauty from "./pages/beauty/Beauty";
import Entertainment from "./pages/entertainment/Entertainment";
import Home from "./pages/home/Home";
import Tecnology from "./pages/tecnology/Tecnology";
import Travel from "./pages/travelling/Travel";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Tecnology />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </div>
  );
}

export default App;
