import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const [, , lastItem] = ['boots', 'tent', 'headlamp'];
console.log(lastItem);

ReactDOM.render(
  <>
    <App authorized={true} />
    <Footer />
  </>,
  document.getElementById("root")
);

function Footer() {
  return <h6>Copyright {new Date().getFullYear()}</h6>
}