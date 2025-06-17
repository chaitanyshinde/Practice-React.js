import React, { useState } from "react";

function SearchBox() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "bc4131ef2890ae4af167021290eba17d";

  let weatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let result = await response.json();
    setWeatherData(result);
    // console.log(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    weatherInfo();
    setCity("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter Your City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          SEARCH
        </button>
      </div>
      {weatherData && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            {weatherData.name}
          </h3>
          <div className="space-y-2">
            <p className="text-gray-700">
              Temperature:{" "}
              <span className="font-medium">
                {Math.round(weatherData.main?.temp)}°C
              </span>
            </p>
            <p className="text-gray-700">
              Feels Like:{" "}
              <span className="font-medium">
                {Math.round(weatherData.main?.feels_like)}°C
              </span>
            </p>
            <p className="text-gray-700">
              Humidity:{" "}
              <span className="font-medium">{weatherData.main?.humidity}%</span>
            </p>
            <p className="text-gray-700">
              Weather:{" "}
              <span className="font-medium capitalize">
                {weatherData.weather?.[0]?.description}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBox;
