import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <>
    <App login='bbj' />
    <Footer />
  </>,
  document.getElementById("root")
);

function Footer() {
  return <h6>Copyright {new Date().getFullYear()}</h6>
}