import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bangkok" />
        <footer>Coded by Nattha Oroz</footer>
      </div>
    </div>
  );
}
