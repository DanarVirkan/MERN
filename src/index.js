import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./menu/checkout/checkout.css";
import App from "./App";
import { formatAll } from "currencyformatter.js";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux";
import { Provider } from "react-redux";
import TModal from "./menu/modal/TModal";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TModal/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
formatAll({
  selector: ".money",
  currency: "IDR",
  pattern: "! ,##0.",
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
