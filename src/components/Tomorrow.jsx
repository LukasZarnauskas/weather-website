import { useEffect, useState } from "react";

function Tomorrow({ info, city, temp }) {
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

    timeConverter(info?.sunrise, setSunRise);
    timeConverter(info?.sunset, setSunSet);
  }, [info?.sunrise, info?.sunset]);

  const degree = temp ? "°C" : "°F";
  const fahrenheitDay = info?.temp?.day * 1.8 + 32;
  const fahrenheitNight = info?.temp?.night * 1.8 + 32;

  return (
    <section className="flex items-center justify-center my-12">
      <div className=" px-7 rounded-lg text-white w-814 bg-gradient-to-r via-green-400 from-green-600 to-black">
        {window.innerWidth <= 768 ? (
          <h3 className="text-xl mt-2 text-center">Tomorrow</h3>
        ) : null}
        <h3 className="flex text-2xl font-light mt-8 mb-16 max-md:text-base max-md:justify-center max-md:mt-2 ">
          {city.city}
          <img
            className="max-md:h-5"
            src="/images/icon _location_.png"
            alt="location"
          />
        </h3>
        <div className="flex justify-center max-md:flex-col">
          <h2 className="flex text-7xl items-center justify-center max-md:text-5xl">
            <img
              className="h-16 max-md:h-10"
              src="/images/icon _temperature_.png"
              alt="termometer"
            />
            {temp
              ? info?.temp?.night?.toFixed() || fahrenheitNight.toFixed()
              : fahrenheitNight.toFixed()}
            -
            {temp
              ? info?.temp?.day?.toFixed() || fahrenheitDay.toFixed()
              : fahrenheitDay.toFixed()}
            {degree}
          </h2>
          <div className="ml-2 flex items-center flex-col ">
            <img
              className=" max-w-62"
              src={`https://openweathermap.org/img/w/${info?.weather[0]?.icon}.png
`}
              alt="icon"
            />
            <p className="text-xs uppercase">
              {info?.weather[0]?.description ?? "N/A"}
            </p>
          </div>
        </div>
        <div className="max-md:flex max-md:justify-around max-md:mt-3">
          <h3>Sunrise: {sunRise}</h3>
          <h3>Sunset: {sunSet}</h3>
        </div>
        <div className="mt-24 flex justify-around text-white max-md:mt-10 max-md:mb-4">
          <div>
            <h3>HUMIDITY</h3>
            <h3 className="text-center">{`${info?.humidity}%` ?? "N/A"}</h3>
          </div>

          <div>
            <h3>AIR PRESSURE</h3>
            <h3 className="text-center">{`${info?.pressure}hPa` ?? "N/A"}</h3>
          </div>
          <div>
            <h3>WIND</h3>
            <h3 className="text-center">{`${info?.wind_speed}m/s` ?? "N/A"}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tomorrow;
