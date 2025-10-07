import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall';
const DEFAULT_UNITS = process.env.REACT_APP_DEFAULT_UNITS || 'imperial';
const DEFAULT_LANG = process.env.REACT_APP_DEFAULT_LANG || 'en';

/**
 * Fetch weather data from OpenWeatherMap One Call API 3.0
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @param {string} units - Units of measurement (metric, imperial, standard)
 * @returns {Promise<Object>} Weather data object
 */
export const getWeatherByCoordinates = async (
  lat = 40.7128,
  lon = -74.0060,
  units = DEFAULT_UNITS
) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        lat,
        lon,
        units,
        lang: DEFAULT_LANG,
        appid: API_KEY,
      },
    });

    const data = response.data;

    // Transform API response into app-friendly format
    return {
      current: {
        location: `${lat.toFixed(2)}, ${lon.toFixed(2)}`, // Will be replaced with geocoding later
        temperature: Math.round(data.current.temp),
        description: data.current.weather[0].description,
        icon: data.current.weather[0].icon,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_speed,
      },
      forecast: data.daily.slice(0, 8).map((day, index) => {
        const date = new Date(day.dt * 1000);
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return {
          day: index === 0 ? 'Today' : dayNames[date.getDay()],
          high: Math.round(day.temp.max),
          low: Math.round(day.temp.min),
          icon: day.weather[0].icon,
        };
      }),
      units,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);

    if (error.response) {
      // API returned an error response
      throw new Error(`Weather API Error: ${error.response.data.message || error.response.statusText}`);
    } else if (error.request) {
      // Request made but no response received
      throw new Error('Unable to reach weather service. Please check your internet connection.');
    } else {
      // Something else happened
      throw new Error('Failed to fetch weather data. Please try again later.');
    }
  }
};
