import "@elastic/eui/dist/eui_theme_light.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Converter from "./Converter";
import Home from "./Home";
import Navbar from "./Nav";
import Table from "./Table";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/converter/" component={Converter} />
        <Route path="/table/" component={Table} />
      </div>
    </Router>
  );
}

export default App;
