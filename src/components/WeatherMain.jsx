import { useEffect, useState } from "react";
import WeatherByHour from "./WeatherByHour";

function WeatherMain({ temp, city, info }) {
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
      <section className="flex items-center justify-center my-12">
        <div className=" px-7 rounded-lg text-white w-814 bg-gradient-to-r via-purple-500 from-purple-600 to-black">
          <h3 className="flex text-2xl font-light mt-8 mb-16 ">
            {city.city}
            <img src="/src/images/icon _location_.png" alt="location" />
          </h3>
          <div className="flex justify-center">
            <h2 className="flex text-7xl items-center justify-center">
              <img
                className="h-16"
                src="/src/images/icon _temperature_.png"
                alt="termometer"
              />
              {info?.current?.temp?.toFixed() ?? "N/A"}°C
            </h2>
            <div className="ml-2 flex flex-col ">
              <img
                className=""
                src={`http://openweathermap.org/img/w/${info?.current?.weather[0]?.icon}.png
`}
                alt="icon"
              />
              <p className="text-xs uppercase">
                {info?.current?.weather[0]?.description ?? "N/A"}
              </p>
            </div>
          </div>
          <h3>Sunrise: {sunRise}</h3>
          <h3>Sunset: {sunSet}</h3>
          <div className="mt-24 flex justify-around text-white">
            <div>
              <h3>HUMIDITY</h3>
              <h3 className="text-center">
                {`${info?.current?.humidity}%` ?? "N/A"}
              </h3>
            </div>
            <div>
              <h3>VISIBILITY</h3>
              <h3 className="text-center">
                {`${info?.current?.visibility / 1000}km` ?? "N/A"}
              </h3>
            </div>
            <div>
              <h3>AIR PRESSURE</h3>
              <h3 className="text-center">
                {`${info?.current?.pressure}hPa` ?? "N/A"}
              </h3>
            </div>
            <div>
              <h3>WIND</h3>
              <h3 className="text-center">
                {`${info?.current?.wind_speed}m/s` ?? "N/A"}
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex justify-between text-white mt-10">
        {info?.hourly?.slice(1, 13).map((hour) => (
          <WeatherByHour key={hour.dt} info={hour} />
        ))}
      </section>
    </div>
  );
}

export default WeatherMain;
