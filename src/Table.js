import React from "react";
import { json, checkStatus } from "./utils";
import { EuiBasicTable, EuiSelect, EuiSpacer } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";

class Table extends React.Component {
  state = { base: "USD", rates: null };

  handleChange = (event) => {
    console.log("initial state", this.state.base);
    this.setState({ base: event.target.value });
    console.log("event target", event.target.value);
    console.log("new state", this.state.base);
    this.fetchData(event.target.value);
  };

  fetchData = (base) => {
    fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${base}`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        if (data.Response !== "False") {
          this.setState({ rates: data.rates, error: "" });
        }
      })
      .catch((error) => {
        this.setState({ error: error.message });
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchData(this.state.base);
  }

  render() {
    if (!this.state.rates) {
      return null;
    }

    const columns = [
      {
        field: "countrycode",
        name: "Currency Code",
      },
      {
        field: "rate",
        name: "Rate",
      },
    ];

    const items = Object.entries(this.state.rates).map(
      ([countrycode, rate]) => ({
        countrycode,
        rate,
      })
    );

    const options = [
      { value: "USD", text: "USD" },
      { value: "AUD", text: "AUD" },
      { value: "BGN", text: "BGN" },
      { value: "BRL", text: "BRL" },
      { value: "CAD", text: "CAD" },
      { value: "CHF", text: "CHF" },
      { value: "CNY", text: "CNY" },
      { value: "CZK", text: "CZK" },
      { value: "DKK", text: "DKK" },
      { value: "GBP", text: "GBP" },
      { value: "HKD", text: "HKD" },
      { value: "HRK", text: "HRK" },
      { value: "HUF", text: "HUF" },
      { value: "IDR", text: "IDR" },
      { value: "ILS", text: "ILS" },
      { value: "INR", text: "INR" },
      { value: "ISK", text: "ISK" },
      { value: "JPY", text: "JPY" },
      { value: "KRW", text: "KRW" },
      { value: "MXN", text: "MXN" },
      { value: "MYR", text: "MYR" },
      { value: "NOK", text: "NOK" },
      { value: "NZD", text: "NZD" },
      { value: "PHP", text: "PHP" },
      { value: "PLN", text: "PLN" },
      { value: "RON", text: "RON" },
      { value: "RUB", text: "RUB" },
      { value: "SEK", text: "SEK" },
      { value: "SGD", text: "SGD" },
      { value: "THB", text: "THB" },
      { value: "TRY", text: "TRY" },
      { value: "ZAR", text: "ZAR" },
      { value: "EUR", text: "EUR" },
    ];

    return (
      <div>
        <EuiSelect
          id="currencyBase"
          options={options}
          onChange={this.handleChange}
          aria-label="Currency Type"
          value={this.state.base}
        />
        <EuiSpacer></EuiSpacer>
        <EuiBasicTable
          items={items}
          columns={columns}
          state={this.state.rates}
        />
      </div>
    );
  }
}

export default Table;
