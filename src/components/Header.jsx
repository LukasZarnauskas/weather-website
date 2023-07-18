import { useEffect, useState } from "react";

function Header({ handleActive }) {
  const [active, setActive] = useState({
    today: true,
    tomorrow: false,
    week: false,
  });
  const [now, setNow] = useState(new Date());
  function handleClick(e) {
    if (e === "Today") {
      setActive({ today: true, tomorrow: false, week: false });
    } else if (e === "Tomorrow") {
      setActive({ today: false, tomorrow: true, week: false });
    } else if (e === "Week") {
      setActive({ today: false, tomorrow: false, week: true });
    }
  }
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const second = now.getSeconds().toString().padStart(2, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  handleActive(active);
  return (
    <div className="text-white  flex  justify-between items-center max-md:block max-md:mb-4">
      <div className="flex flex-col">
        <div className="flex">
          <img
            className="order-1  w-16 h-12"
            src="/images/Vector.png"
            alt="icon"
          />
          <h1 className=" order-2 mt-5 text-7xl max-lg:text-5xl  ">
            WeatherMe
          </h1>
        </div>
        <div className="flex justify-end max-md:justify-center">
          <p className=" text-xl mr-3">{`${year}/${month}/${date}`}</p>
          <p className=" text-xl w-20">{` ${hour}:${minute}:${second}`}</p>
        </div>
      </div>
      <div className="flex justify-around grow">
        <button
          onClick={() => handleClick("Today")}
          className={` font-light text-3xl max-lg:text-2xl ${
            active.today
              ? "border-b-2 border-white text-white max-md:hidden"
              : "text-gray-300"
          } `}
        >
          Today
        </button>
        <button
          onClick={() => handleClick("Tomorrow")}
          className={` font-light text-3xl max-lg:text-2xl  ${
            active.tomorrow
              ? "border-b-2 border-white text-white max-md:hidden"
              : "text-gray-300"
          }`}
        >
          Tomorrow
        </button>
        <button
          onClick={() => handleClick("Week")}
          className={` font-light text-3xl max-lg:text-2xl ${
            active.week
              ? "border-b-2 text-white border-white max-md:hidden"
              : "text-gray-300"
          }`}
        >
          Week
        </button>
      </div>
    </div>
  );
}

export default Header;
