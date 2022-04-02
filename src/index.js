import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.Fragment>
    <App authorized={true} />,
    <Footer />
  </React.Fragment>,
  document.getElementById("root")
);

function Footer() {
  return <h6>Copyright {new Date().getFullYear()}</h6>
}