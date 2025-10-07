import React from "react";
import { ForecastCard } from "./ForecastCard.jsx";

export const Forecast = ({ items = [], title = "8-day forecast" }) => {
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
