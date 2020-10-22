import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <EuiSpacer size="xxl" />
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiText>
            <h1>Welcome to my currency converter</h1>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup style={{ marginLeft: 100, marginRight: 100 }}>
        <EuiFlexItem>
          <Link to="/converter/">
            <EuiCard
              icon={<EuiIcon type="inputOutput" size="xxl" />}
              title={<p>Convert</p>}
              description="Convert amount from one currency to another"
              display="panel"
              padding="xl"
            />
          </Link>
        </EuiFlexItem>
        <EuiFlexItem>
          <Link to="/table/">
            <EuiCard
              icon={<EuiIcon type="tableDensityExpanded" size="xxl" />}
              title={<p>View current rates</p>}
              description="View a table of current rates"
              display="panel"
              padding="l"
            />
          </Link>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}

export default Home;
