import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState('happy');
  const [secondary, setSecondary] = useState('tired');

  // used to implement side-effect related to component render, not rendering itself
  // generally to console log, fetch data ...
  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);
  //called the 'dependency array', if empty, useEffect() called 1 time at first render.
  // [emotion]: useEffect() called every time emotion state changes
  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);


  return (
    <>
      <h1>Current emotion is {emotion} and {secondary}.</h1>
      <button onClick={() => setEmotion('happy')}>
        Make Happy
      </button>
      <button onClick={() => setSecondary('crabby')}>
        Make Crabby
      </button>
      <button onClick={() => setEmotion('frustrated')}>
        Frustrate
      </button>
      <button onClick={() => setEmotion('enthusiastic')}>
        Enthuse
      </button>
    </>
  );
}

export default App;
