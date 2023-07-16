import { useState } from "react";
import "./assets/App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import WeatherMain from "./components/WeatherMain";

function App() {
  const [searchInfoTemp, setSearchInfoTemp] = useState({ tempValue: true });
  const [searchInfoCity, setSearchInfoCity] = useState({ city: "" });
  const [weatherInfo, setWeatherInfo] = useState({});
  const [weatherInfoByHour, setWeatherInfoByHour] = useState({});
  const [active, setActive] = useState({});

  function handleActive(active) {
    setActive(active);
  }
  function handleSearchTemp(tempVal) {
    setSearchInfoTemp({ tempValue: tempVal });
  }
  function handleSearchCity(city) {
    setSearchInfoCity({ city: city });
  }
  function handleWeatherInfo(weather) {
    setWeatherInfo(weather);
  }
  function handleWeatherInfoByHour(weatherByHour) {
    setWeatherInfoByHour(weatherByHour);
  }

  return (
    <div className="bg-gray-950 w-1440 font-popins px-6">
      <Header handleActive={handleActive} />

      <Search
        handleSearchTemp={handleSearchTemp}
        handleSearchCity={handleSearchCity}
        handleWeatherInfo={handleWeatherInfo}
        handleWeatherInfoByHour={handleWeatherInfoByHour}
      />
      <WeatherMain
        temp={searchInfoTemp}
        city={searchInfoCity}
        info={weatherInfo}
        infoByHour={weatherInfoByHour}
        active={active}
      />
    </div>
  );
}

export default App;
