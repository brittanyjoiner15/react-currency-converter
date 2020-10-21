import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  EuiBottomBar,
  EuiHeaderLink,
  EuiHeaderSectionItem,
  EuiSpacer,
  EuiText,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiIcon,
  EuiFlexItem,
  EuiLink,
  EuiFlexGroup,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <EuiBottomBar>
          <EuiFlexGroup justifyContent="spaceEvenly">
            <EuiFlexItem>
              <EuiHeaderLogo type="logoElastic">
                <EuiText color="ghost">Made with EUI</EuiText>
              </EuiHeaderLogo>
            </EuiFlexItem>
            <EuiFlexItem grow={false} style={{ padding: 10 }}>
              <EuiLink href="https://brittjoiner.netlify.app/" target="_blank">
                <EuiText color="ghost">View my Portfolio</EuiText>
              </EuiLink>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiBottomBar>
      </div>
    );
  }
}

export default Footer;
