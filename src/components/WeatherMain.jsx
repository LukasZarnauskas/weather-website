import { useEffect, useState } from "react";
import WeatherByHour from "./WeatherByHour";
import MainToday from "./MainToday";

import Tomorrow from "./Tomorrow";

function WeatherMain({ temp, city, info, active, infoByHour }) {
  const [sunRise, setSunRise] = useState("");
  const [sunSet, setSunSet] = useState("");
  console.log(infoByHour?.list?.slice(3, 10));
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
  console.log(active);
  return (
    <div>
      {active.today ? (
        <MainToday info={info} sunSet={sunSet} sunRise={sunRise} city={city} />
      ) : null}
      {active.tomorrow ? (
        <Tomorrow
          info={info?.daily && info?.daily.length > 1 ? info.daily[1] : null}
          city={city}
        />
      ) : null}

      {active.week ? () : null}

      <section className=" flex justify-between text-white mt-10">
        {active.today
          ? info?.hourly
              ?.slice(1, 13)
              .map((hour) => (
                <WeatherByHour
                  key={hour.dt}
                  info={hour}
                  active={active.today}
                />
              ))
          : null}
        {active.tomorrow
          ? infoByHour?.list
              ?.slice(1, 9)
              .map((hour) => <WeatherByHour key={hour.dt} info={hour} />)
          : null}
      </section>
    </div>
  );
}

export default WeatherMain;
