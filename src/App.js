import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header.jsx";
import { Forecast } from "./components/Forecast.jsx";
import { getWeatherByCoordinates } from "./services/weatherApi.js";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        // Default to New York, NY coordinates
        const data = await getWeatherByCoordinates(40.7128, -74.0060);
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="App">
        <div className="loading">Loading weather data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header
        location={weatherData?.current?.location || "New York, NY"}
        temperature={weatherData?.current?.temperature}
        description={weatherData?.current?.description}
        icon={weatherData?.current?.icon}
      />
      <Forecast items={weatherData?.forecast || []} />
    </div>
  );
}

export default App;
