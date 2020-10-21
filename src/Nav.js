import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Table from "./Table";
import Converter from "./Converter";
import Home from "./Home";

import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <EuiHeader>
          <EuiHeaderSectionItem border="right">
            <Link to="/">
              <EuiHeaderLogo iconType="logoCodesandbox">
                Currency Converter
              </EuiHeaderLogo>
            </Link>
          </EuiHeaderSectionItem>

          <EuiHeaderSectionItem>
            <EuiHeaderLinks aria-label="App navigation links">
              <Link to="/converter/">
                <EuiHeaderLink>Converter</EuiHeaderLink>
              </Link>

              <Link to="/table/">
                <EuiHeaderLink>Table of Rates</EuiHeaderLink>
              </Link>

              <a
                target="_blank"
                href="https://github.com/brittanyjoiner15/react-currency-converter"
              >
                <EuiHeaderLink iconType="logoGithub">Code</EuiHeaderLink>
              </a>
            </EuiHeaderLinks>
          </EuiHeaderSectionItem>
        </EuiHeader>
      </div>
    );
  }
}

export default Navbar;
