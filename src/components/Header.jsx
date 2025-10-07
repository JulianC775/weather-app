import React from "react";

export const Header = ({
  location = "New York, NY",
  temperature = 22,
  description = "Partly Cloudy",
  icon = "02d",
}) => {
  const units = process.env.REACT_APP_DEFAULT_UNITS || 'imperial';
  const tempSymbol = units === 'imperial' ? '°F' : units === 'metric' ? '°C' : 'K';

  return (
    <div className="header">
      <div className="header-content">
        <div className="location">
          <h1>{location}</h1>
        </div>
        <div className="weather-info">
          <div className="temperature">
            <span className="temp-value">{temperature}{tempSymbol}</span>
          </div>
          <div className="weather-details">
            <div className="weather-icon">
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={description}
                className="weather-icon-img"
              />
            </div>
            <div className="weather-description">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
