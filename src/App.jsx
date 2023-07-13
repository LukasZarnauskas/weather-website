import { useState } from "react";
import "./assets/App.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [searchInfoTemp, setSearchInfoTemp] = useState({ tempValue: true });
  const [searchInfoCity, setSearchInfoCity] = useState({ city: "" });
  function handleSearchTemp(tempVal) {
    setSearchInfoTemp({ tempValue: tempVal });
  }
  function handleSearchCity(city) {
    setSearchInfoCity({ city: city });
  }

  return (
    <div className="bg-gray-950 w-1440 font-popins">
      <Header />
      <Search
        handleSearchTemp={handleSearchTemp}
        handleSearchCity={handleSearchCity}
      />
    </div>
  );
}

export default App;
