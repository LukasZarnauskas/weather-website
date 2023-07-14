import { useState } from "react";
import "./assets/App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import WeatherMain from "./components/WeatherMain";

function App() {
  const [searchInfoTemp, setSearchInfoTemp] = useState({ tempValue: true });
  const [searchInfoCity, setSearchInfoCity] = useState({ city: "" });
  const [weatherInfo, setWeatherInfo] = useState({});
  function handleSearchTemp(tempVal) {
    setSearchInfoTemp({ tempValue: tempVal });
  }
  function handleSearchCity(city) {
    setSearchInfoCity({ city: city });
  }
  function handleWeatherInfo(weather) {
    setWeatherInfo(weather);
  }

  return (
    <div className="bg-gray-950 w-1440 font-popins">
      <Header timeOf={weatherInfo.timezone} />
      <Search
        handleSearchTemp={handleSearchTemp}
        handleSearchCity={handleSearchCity}
        handleWeatherInfo={handleWeatherInfo}
      />
      <WeatherMain
        temp={searchInfoTemp}
        city={searchInfoCity}
        info={weatherInfo}
      />
    </div>
  );
}

export default App;
