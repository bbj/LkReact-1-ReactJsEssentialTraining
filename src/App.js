import React from "react";
import "./App.css";

function App({ authorized }) {
  return (
    <>
      {authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  );

  // if (props.authorized) {
  //   return SecretComponent();
  // } else {
  //   return RegularComponent();
  // }
}

function SecretComponent() {
  return <h1>Secret only for authenticated users</h1>
}

function RegularComponent() {
  return <h1>Everyone can see this component.</h1>
}

export default App;
