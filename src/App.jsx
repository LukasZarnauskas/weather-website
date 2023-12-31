import { useState } from "react";
import "./assets/App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import WeatherMain from "./components/WeatherMain";

function App() {
  const [searchInfoTemp, setSearchInfoTemp] = useState(true);
  const [searchInfoCity, setSearchInfoCity] = useState({ city: "" });
  const [weatherInfo, setWeatherInfo] = useState({});
  const [weatherInfoByHour, setWeatherInfoByHour] = useState({});
  const [active, setActive] = useState({});

  function handleActive(active) {
    setActive(active);
  }
  function handleSearchTemp(tempVal) {
    setSearchInfoTemp(tempVal);
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
    <div className="bg-gray-800 ">
      <div className="bg-gray-950 max-w-1440 font-popins px-6 mx-auto py-3">
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
    </div>
  );
}

export default App;
