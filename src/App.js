import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bangkok" />
        <footer>
          <a
            className="footerLink"
            href="https://github.com/NataNONR/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Nattha Oroz
        </footer>
      </div>
    </div>
  );
}
