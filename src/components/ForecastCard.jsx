import React from "react";

export const ForecastCard = ({ day = "Mon", high = 24, low = 16, icon = "01d" }) => {
  return (
    <div className="forecast-card">
      <div className="forecast-card-day">{day}</div>
      <img
        className="forecast-card-icon"
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt={`${day} weather icon`}
      />
      <div className="forecast-card-temps">
        <span className="temp-high">{Math.round(high)}°</span>
        <span className="temp-low">{Math.round(low)}°</span>
      </div>
    </div>
  );
};



