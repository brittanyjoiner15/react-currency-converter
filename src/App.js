import React from "react";
import logo from "./logo.svg";
import Table from "./Table";
import Converter from "./Converter";
import Navbar from "./Nav";
import "./App.css";
import "@elastic/eui/dist/eui_theme_light.css";

import { EuiSpacer, EuiFlexGroup, EuiFlexItem, EuiText } from "@elastic/eui";

function App() {
  return (
    <div className="App">
      <Navbar />
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiText>
            <h1>Welcome to my currency converter.</h1>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}

export default App;
