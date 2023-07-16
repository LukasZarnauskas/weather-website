import { useEffect, useState } from "react";
import { id } from "../../id";

function Search({ handleSearchTemp, handleSearchCity, handleWeatherInfo }) {
  const [enabled, setEnabled] = useState(false);
  const [input, setInput] = useState("");
  const [currentLoc, setCurrentLoc] = useState({ lat: null, lon: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    getCordinates();
    setInput("");
  };
  const handleToggle = () => {
    setEnabled(!enabled);
    handleSearchTemp(enabled);
  };

  function getCordinates() {
    return fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${id}`
    )
      .then((res) => res.json())
      .then((dataInJs) => {
        getWeatherData(dataInJs[0].lat, dataInJs[0].lon);
      })
      .catch((err) => console.log(err));
  }
  async function getCityName(lat, lon) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${id}`
      );
      const dataInJs = await response.json();

      handleSearchCity(dataInJs[0].name);
    } catch (err) {
      console.log(err);
    }
  }

  function getWeatherData(lat, lon) {
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setCurrentLoc({ lat: latitude.toFixed(2), lon: longitude.toFixed(2) });
      getCityName(latitude.toFixed(2), longitude.toFixed(2));
    });
  }, []);
  useEffect(() => {
    getWeatherData(currentLoc.lat, currentLoc.lon);
  }, [currentLoc]);

  return (
    <div className="">
      <div className="flex align-middle">
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
          className=" bg-gray-300 py-2 px-3 rounded-s-3xl border-e border-gray-400 hover:bg-gray-400 transition-all"
          type="submit"
        >
          <img src="/src/images/icon _search_.png" alt="search" />
        </button>
        <input
          placeholder="Search location..."
          className="px-2 bg-gray-300 text-2xl text-gray-600 w-600 rounded-e-3xl outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
