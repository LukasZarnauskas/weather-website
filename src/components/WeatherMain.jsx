import { useEffect, useState } from "react";
import WeatherByHour from "./WeatherByHour";
import MainToday from "./MainToday";

import Tomorrow from "./Tomorrow";
import Week from "./Week";

function WeatherMain({ temp, city, info, active, infoByHour }) {
  const [sunRise, setSunRise] = useState("");
  const [sunSet, setSunSet] = useState("");

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
      {active.today ? (
        <MainToday
          info={info}
          sunSet={sunSet}
          sunRise={sunRise}
          city={city}
          temp={temp}
        />
      ) : null}
      {active.tomorrow ? (
        <Tomorrow
          info={info?.daily && info?.daily.length > 1 ? info.daily[1] : null}
          city={city}
          temp={temp}
        />
      ) : null}

      {active.week ? (
        <section className="flex flex-col items-center my-12">
          <h2 className="text-white text-4xl mb-2">{city.city}</h2>
          {info?.daily?.slice(1, 8).map((daily) => (
            <Week key={daily.dt} info={daily} temp={temp} />
          ))}
        </section>
      ) : null}

      <section className="  overflow-x-scroll ">
        <div className=" flex justify-between text-white mt-10 overflow-x-scroll min-w-1024">
          {active.today
            ? info?.hourly
                ?.slice(1, 13)
                .map((hour) => (
                  <WeatherByHour
                    key={hour.dt}
                    info={hour}
                    active={active.today}
                    temp={temp}
                  />
                ))
            : null}
          {active.tomorrow
            ? infoByHour?.list
                ?.slice(1, 9)
                .map((hour) => (
                  <WeatherByHour key={hour.dt} info={hour} temp={temp} />
                ))
            : null}
        </div>
      </section>
    </div>
  );
}

export default WeatherMain;
