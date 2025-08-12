import React from "react";
import "./App.css";
import { Header } from "./components/Header.jsx";
import { Forecast } from "./components/Forecast.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Forecast />
    </div>
  );
}

export default App;
