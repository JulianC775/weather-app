# Weather App Development Roadmap

## Project Overview

Building a React weather application with current weather display and forecast functionality using OpenWeatherMap One Call API 3.0.

## 📋 Phase 1: Foundation & Setup (COMPLETED ✅)

### 1.1 OpenWeatherMap One Call API 3.0 Setup

- [x] Sign up for OpenWeatherMap account at [openweathermap.org](https://openweathermap.org)
- [x] Subscribe to "One Call by Call" subscription (separate from other plans)
- [x] Get API key from account dashboard under "API key" tab
- [x] Set up environment variables (`.env` file):

- [x] Create API service utilities in `src/services/`
- [ ] Test API connectivity with One Call API 3.0 endpoint

### 1.2 Basic Project Structure

- [ ] Create component folder structure:
  ```
  src/
  ├── components/
  │   ├── Header/
  │   ├── Forecast/
  │   ├── Search/
  │   └── common/
  ├── services/
  └── styles/
  ```

## 🎨 Phase 2: Build Visible Components (Priority: HIGH)

### 2.1 Header Component (`src/components/Header/`)

**Goal**: Create a visible header that shows current weather info

**Steps**:

- [ ] Create `src/components/Header/Header.jsx`
- [ ] Add basic layout with:
  - Location name (hardcoded for now)
  - Current temperature (hardcoded for now)
  - Weather description (hardcoded for now)
  - Weather icon (hardcoded for now)
- [ ] Add CSS classes to `src/App.css`
- [ ] Import and display in `App.js`

### 2.2 Forecast Component (`src/components/Forecast/`)

**Goal**: Create a visible forecast section

**Steps**:

- [ ] Create `src/components/Forecast/Forecast.jsx`
- [ ] Create `src/components/Forecast/ForecastCard.jsx`
- [ ] Add 8 forecast cards with:
  - Day of week (hardcoded for now)
  - High/low temperature (hardcoded for now)
  - Weather icon (hardcoded for now)
- [ ] Add CSS classes to `src/App.css`
- [ ] Import and display in `App.js`

### 2.3 Search Component (`src/components/Search/`)

**Goal**: Create a visible search bar

**Steps**:

- [ ] Create `src/components/Search/Search.jsx`
- [ ] Add search input field
- [ ] Add search button
- [ ] Add CSS classes to `src/App.css`
- [ ] Import and display in `App.js`

### 2.4 Common Components (`src/components/common/`)

**Goal**: Create reusable UI components

**Steps**:

- [ ] Create `src/components/common/Button.jsx`
- [ ] Create `src/components/common/Card.jsx`
- [ ] Create `src/components/common/Loading.jsx`
- [ ] Add CSS classes to `src/App.css`

## 🔧 Phase 3: Add API Functionality (Priority: MEDIUM)

### 3.1 Test API Connectivity

**Goal**: Verify the API is working

**Steps**:

- [ ] Test API call in browser console
- [ ] Verify API key is working
- [ ] Check data structure

### 3.2 Simple API Service

**Goal**: Connect components to real weather data

**Steps**:

- [ ] Create `src/services/weatherApi.js`
- [ ] Add function to fetch weather data
- [ ] Add function to handle API errors

### 3.3 Connect Header to API

**Goal**: Make header show real weather data

**Steps**:

- [ ] Add state to Header component
- [ ] Call API when component loads
- [ ] Display real weather data
- [ ] Add loading state
- [ ] Add error handling

### 3.4 Connect Forecast to API

**Goal**: Make forecast show real weather data

**Steps**:

- [ ] Add state to Forecast component
- [ ] Call API when component loads
- [ ] Display real forecast data
- [ ] Add loading state
- [ ] Add error handling

### 3.5 Connect Search to API

**Goal**: Make search functional

**Steps**:

- [ ] Add state to Search component
- [ ] Handle search input changes
- [ ] Call API with new location
- [ ] Update Header and Forecast with new data

## 🎨 Phase 4: Polish & Enhance (Priority: LOW)

### 4.1 Responsive Design

- [ ] Make components work on mobile
- [ ] Add touch-friendly interactions
- [ ] Test on different screen sizes

### 4.2 User Experience

- [ ] Add smooth animations
- [ ] Add loading spinners
- [ ] Add error messages
- [ ] Add success feedback

### 4.3 Additional Features

- [ ] Temperature unit toggle (C/F)
- [ ] Dark/light theme
- [ ] Weather alerts display
- [ ] Hourly forecast section

## 🎯 Immediate Next Steps (This Week)

1. **Create the component folders** (Header, Forecast, Search, common)
2. **Build Header component** with hardcoded data first
3. **Build Forecast component** with hardcoded data first
4. **Build Search component** with basic input
5. **Add all styles to `src/App.css`**
6. **Test that everything displays** on the website

## Styling Approach

**Use `src/App.css` for everything:**

- Add component styles to the existing `App.css` file
- Use descriptive class names like `.header`, `.forecast`, `.search`
- Keep it simple and organized

## API Reference

### One Call API 3.0 Endpoint

```
https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&units=metric&appid={API_KEY}
```

### Key Data Fields

- `current.temp` - Current temperature
- `current.weather[0].description` - Weather description
- `current.weather[0].icon` - Weather icon code
- `current.humidity` - Humidity percentage
- `current.wind_speed` - Wind speed
- `daily` - Array of 8 daily forecasts
- `daily[0].temp.max/min` - Daily high/low
- `daily[0].weather[0].icon` - Daily weather icon

### Test API in Browser Console (when ready)

```javascript
fetch(
  "https://api.openweathermap.org/data/3.0/onecall?lat=40.7128&lon=-74.0060&units=metric&appid=81fcb4fb5fd9a343be7076171c66a238"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## Current Setup

- ✅ React app created
- ✅ OpenWeatherMap API key configured
- ✅ Environment variables set up
- [ ] API tested and working

**Next**: Build visible components first, then deal with API later!
