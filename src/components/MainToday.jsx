function MainToday({ info, sunSet, sunRise, city, temp }) {
  const degree = temp ? "°C" : "°F";
  const fahrenheit = info?.current?.temp * 1.8 + 32;

  return (
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
            {temp
              ? info?.current?.temp?.toFixed() ?? "N/A"
              : fahrenheit.toFixed()}{" "}
            {degree}
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
  );
}

export default MainToday;
