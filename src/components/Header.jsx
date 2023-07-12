import { useState } from "react";

function Header() {
  const [active, setActive] = useState({
    today: true,
    tomorrow: false,
    week: false,
  });
  function handleClick(e) {
    if (e === "Today") {
      setActive({ today: true, tomorrow: false, week: false });
    } else if (e === "Tomorrow") {
      setActive({ today: false, tomorrow: true, week: false });
    } else if (e === "Week") {
      setActive({ today: false, tomorrow: false, week: true });
    }
  }
  return (
    <div className="text-white  flex  items-center">
      <div className="flex flex-col">
        <div className="flex">
          <img
            className="order-1  w-16 h-12"
            src="/src/images/Vector.png"
            alt="icon"
          />
          <h1 className=" order-2 mt-5 text-7xl">WeatherMe</h1>
        </div>
        <p className="text-right text-xl">21:00pm</p>
      </div>
      <div className="flex justify-around w-2/3">
        <button
          onClick={() => handleClick("Today")}
          className={` font-light text-3xl ${
            active.today
              ? "border-b-2 border-white text-white"
              : "text-gray-300"
          }`}
        >
          Today
        </button>
        <button
          onClick={() => handleClick("Tomorrow")}
          className={` font-light text-3xl ${
            active.tomorrow
              ? "border-b-2 border-white text-white"
              : "text-gray-300"
          }`}
        >
          Tomorrow
        </button>
        <button
          onClick={() => handleClick("Week")}
          className={` font-light text-3xl ${
            active.week ? "border-b-2 text-white border-white" : "text-gray-300"
          }`}
        >
          Week
        </button>
      </div>
    </div>
  );
}

export default Header;
