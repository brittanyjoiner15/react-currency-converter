import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Table from "./Table";
import Converter from "./Converter";

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
      <Router>
        <div>
          <EuiHeader>
            <EuiHeaderSectionItem border="right">
              <EuiHeaderLogo iconType="logoCodesandbox">
                Currency Converter
              </EuiHeaderLogo>
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
          <Route path="/converter/" component={Converter} />
          <Route path="/table/" component={Table} />
        </div>
      </Router>
    );
  }
}

export default Navbar;
