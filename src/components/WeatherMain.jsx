import { useEffect, useState } from "react";
import WeatherByHour from "./WeatherByHour";
import MainToday from "./MainToday";

import Tomorrow from "./Tomorrow";

function WeatherMain({ temp, city, info }) {
  const [sunRise, setSunRise] = useState("");
  const [sunSet, setSunSet] = useState("");
  console.log(info);
  useEffect(() => {
    function timeConverter(timestamp, setTo) {
      const date = new Date(timestamp * 1000);

      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");

      const formattedDate = `${hours}:${minutes}`;
      setTo(formattedDate);
    }

    timeConverter(info?.current?.sunrise, setSunRise);
    timeConverter(info?.current?.sunset, setSunSet);
  }, [info?.current?.sunrise, info?.current?.sunset]);

  return (
    <div>
      <MainToday info={info} sunSet={sunSet} sunRise={sunRise} city={city} />
      <Tomorrow info={info.daily[1]} city={city} />
      <section className=" flex justify-between text-white mt-10">
        {info?.hourly?.slice(1, 13).map((hour) => (
          <WeatherByHour key={hour.dt} info={hour} />
        ))}
      </section>
    </div>
  );
}

export default WeatherMain;
