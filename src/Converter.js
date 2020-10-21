import React from "react";
import { json, checkStatus } from "./utils";
import {
  EuiFieldNumber,
  EuiForm,
  EuiI18n,
  EuiSelect,
  EuiTextColor,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";

class Converter extends React.Component {
  state = {
    base: "USD",
    convertTo: "EUR",
    startAmount: 0,
    rates: "null",
    convertedAmount: 0,
  };

  convert = (base, startAmount) => {
    fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${base}`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        if (data.Response !== "False") {
          this.setState({ rates: data.rates, error: "" });
          console.log(this.state.rates);
          const convertTo = this.state.convertTo;
          const convRate = this.state.rates[convertTo];
          const convertedAmount = this.state.startAmount * convRate;
          this.setState({ convertedAmount: convertedAmount });
          console.log(convertedAmount);
        }
      })
      .catch((error) => {
        this.setState({ error: error.message });
        console.log(error);
      });
  };

  handleChangeBase = (event) => {
    this.setState({ base: event.target.value });
    this.convert(event.target.value, this.state.startAmount);
  };

  handleChangeStartAmount = (event) => {
    this.setState({ startAmount: event.target.value });
    this.convert(this.state.base, event.target.value);
  };

  handleChangeConvertTo = (event) => {
    this.setState({ convertTo: event.target.value });
    this.convert(this.state.base, this.state.startAmount, event.target.value);
  };

  componentDidMount() {
    this.convert(this.state.base);
  }

  render() {
    if (!this.state.rates) {
      return null;
    }

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
        <EuiForm>
          <EuiSelect
            prepend="Convert from: "
            id="currencyBase"
            options={options}
            onChange={this.handleChangeBase}
            aria-label="Currency Type"
            value={this.state.base}
          ></EuiSelect>
          <EuiFieldNumber
            step="any"
            prepend="$"
            value={this.state.startAmount}
            onChange={this.handleChangeStartAmount}
          ></EuiFieldNumber>
          <EuiSelect
            prepend="Convert to: "
            id="convertTo"
            options={options}
            onChange={this.handleChangeConvertTo}
            aria-label="Currency Type"
            value={this.state.convertTo}
          ></EuiSelect>
        </EuiForm>
        <p>${this.state.convertedAmount.toFixed(2)}</p>
      </div>
    );
  }
}

export default Converter;
