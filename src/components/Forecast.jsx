import React from "react";
import { ForecastCard } from "./ForecastCard.jsx";

const sampleForecast = [
  { day: "Mon", high: 26, low: 18, icon: "01d" },
  { day: "Tue", high: 24, low: 17, icon: "02d" },
  { day: "Wed", high: 22, low: 16, icon: "03d" },
  { day: "Thu", high: 23, low: 15, icon: "04d" },
  { day: "Fri", high: 25, low: 17, icon: "10d" },
  { day: "Sat", high: 27, low: 19, icon: "09d" },
  { day: "Sun", high: 28, low: 20, icon: "11d" },
  { day: "Mon", high: 26, low: 18, icon: "13d" },
];

export const Forecast = ({ items = sampleForecast, title = "8-day forecast" }) => {
  return (
    <div className="forecast">
      <h2 className="forecast-title">{title}</h2>
      <div className="forecast-grid">
        {items.map((f, idx) => (
          <ForecastCard key={`${f.day}-${idx}`} {...f} />
        ))}
      </div>
    </div>
  );
};
