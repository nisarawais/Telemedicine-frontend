import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Router from "./layout/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
