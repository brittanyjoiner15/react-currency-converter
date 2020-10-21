import React from "react";
import logo from "./logo.svg";
import Table from "./Table";
import Converter from "./Converter";
import "./App.css";
import "@elastic/eui/dist/eui_theme_light.css";

function App() {
  return (
    <div className="App">
      <Converter />
    </div>
  );
}

export default App;
