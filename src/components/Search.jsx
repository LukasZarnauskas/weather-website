import { useEffect, useState, useRef } from "react";
import { id } from "../../id";

function Search({
  handleSearchTemp,
  handleSearchCity,
  handleWeatherInfo,
  handleWeatherInfoByHour,
}) {
  const [enabled, setEnabled] = useState(false);
  const [input, setInput] = useState("");
  const [currentLoc, setCurrentLoc] = useState({ lat: null, lon: null });
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getCordinates();
    setInput("");
    setSuggestions([]);
  };
  const handleToggle = () => {
    setEnabled(!enabled);
    handleSearchTemp(enabled);
  };

  const buttonRef = useRef(null);

  function getSuggestions() {
    if (input) {
      return fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${id}`
      )
        .then((res) => res.json())
        .then((dataInJs) => {
          setSuggestions(dataInJs);
        })
        .catch((err) => console.log(err));
    }
  }
  useEffect(() => {
    getSuggestions();
  }, [input]);

  function getCordinates() {
    return fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${id}`
    )
      .then((res) => res.json())
      .then((dataInJs) => {
        getWeatherData(dataInJs[0].lat, dataInJs[0].lon);
        getWeatherDataByHour(dataInJs[0].lat, dataInJs[0].lon);
      })
      .catch((err) => console.log(err));
  }
  async function getCityName(lat, lon) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${id}`
      );
      const dataInJs = await response.json();

      handleSearchCity(dataInJs[0].name);
    } catch (err) {
      console.log(err);
    }
  }

  function getWeatherData(lat, lon) {
    if (lat && lon) {
      return fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${id}`
      )
        .then((res) => res.json())
        .then((dataInJs) => {
          handleWeatherInfo(dataInJs);
          getCityName(dataInJs.lat, dataInJs.lon);
        })
        .catch((err) => console.log(err));
    }
  }

  function getWeatherDataByHour(lat, lon) {
    if (lat && lon) {
      return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${id}`
      )
        .then((res) => res.json())
        .then((dataInJs) => {
          handleWeatherInfoByHour(dataInJs);
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setCurrentLoc({ lat: latitude.toFixed(2), lon: longitude.toFixed(2) });
      getCityName(latitude.toFixed(2), longitude.toFixed(2));
    });
  }, []);
  useEffect(() => {
    getWeatherData(currentLoc.lat, currentLoc.lon);
    getWeatherDataByHour(currentLoc.lat, currentLoc.lon);
  }, [currentLoc]);

  const handleLiClick = (suggestion) => {
    setInput(suggestion.name);
    const buttonElement = buttonRef.current;
    if (buttonElement) {
      buttonElement.click();
    }
  };
  return (
    <div className="">
      <div className="flex  max-md: mb-4">
        <p
          className={`${enabled ? "text-white" : "text-blue-500"} text-xl mx-2`}
        >
          C
        </p>
        <label className=" relative items-center  cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={handleToggle}
            className="w-11 h-6 bg-blue-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-400"
          ></div>
        </label>

        <p
          className={`${enabled ? "text-red-600" : "text-white"} text-xl mx-2`}
        >
          F
        </p>
      </div>
      <form
        className="flex
      justify-center"
        onSubmit={handleSubmit}
      >
        <button
          ref={buttonRef}
          className=" bg-gray-300 py-2 px-3 rounded-s-3xl border-e border-gray-400 hover:bg-gray-400 transition-all  "
          type="submit"
        >
          <img
            className="max-md:min-w-20 "
            src="/images/icon _search_.png"
            alt="search"
          />
        </button>
        <input
          placeholder="Search location..."
          className="px-2 bg-gray-300 text-2xl text-gray-600 w-600 rounded-e-3xl outline-none max-lg:w-96 max-md:min-w-240 "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <ul className="flex flex-col  items-center ">
        {Array.isArray(suggestions) &&
          suggestions.length !== 0 &&
          suggestions.map((suggestion) => (
            <li
              onClick={() => handleLiClick(suggestion)}
              className="bg-gray-300 w-600 text-center text-white text-xl border-b border-gray-400 hover:bg-gray-400 transition-all max-lg:w-96"
              key={suggestion.lat}
            >
              {suggestion.name}, {suggestion.country}, {suggestion.state}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Search;
