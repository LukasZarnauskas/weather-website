import WeatherButton from "./WeatherButton";

function Header() {
  const infoArray = ["Today", "Tomorrow", "Week"];
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
        {infoArray.map((day) => (
          <WeatherButton key={day} day={day} />
        ))}
      </div>
    </div>
  );
}

export default Header;
