import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header.jsx";
import { Forecast } from "./components/Forecast.jsx";
import { Button } from "./components/common/Button.jsx";
import { getWeatherByCoordinates } from "./services/weatherApi.js";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiTestResult, setApiTestResult] = useState(null);
  const [apiTestLoading, setApiTestLoading] = useState(false);
  const [apiTestError, setApiTestError] = useState(null);

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

  const testApiConnection = async () => {
    try {
      setApiTestLoading(true);
      setApiTestError(null);
      setApiTestResult(null);

      // CRUD - HTTP
      // Create - POST
      // Read - GET
      // Update - PUT
      // Delete - DELETE

      const response = await axios.get("/api/test");

      setApiTestResult(response.data.message);
    } catch (err) {
      setApiTestError(err.message);
    } finally {
      setApiTestLoading(false);
    }
  };

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

      <div className="api-test-section">
        <h3>API Connection Test</h3>
        <Button onClick={testApiConnection} disabled={apiTestLoading}>
          {apiTestLoading ? "Testing..." : "Test API"}
        </Button>
        {apiTestResult && <div className="api-success">{apiTestResult}</div>}
        {apiTestError && <div className="api-error">Error: {apiTestError}</div>}
      </div>
    </div>
  );
}

export default App;
