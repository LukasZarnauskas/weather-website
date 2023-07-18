function MainToday({ info, sunSet, sunRise, city, temp }) {
  const degree = temp ? "°C" : "°F";
  const fahrenheit = info?.current?.temp * 1.8 + 32;

  return (
    <section className="flex items-center justify-center my-12">
      <div className=" px-7 rounded-lg text-white w-814 bg-gradient-to-r via-purple-500 from-purple-600 to-black">
        {window.innerWidth <= 768 ? (
          <h3 className="text-xl mt-2 text-center">Today</h3>
        ) : null}
        <h3 className="flex  text-2xl font-light mt-8 mb-16 max-md:text-base max-md:justify-center max-md:mt-2 ">
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
              ? info?.current?.temp?.toFixed() ?? "N/A"
              : fahrenheit.toFixed()}{" "}
            {degree}
          </h2>
          <div className="ml-2 flex flex-col items-center">
            <img
              className="max-w-62"
              src={`https://openweathermap.org/img/w/${info?.current?.weather[0]?.icon}.png
`}
              alt="icon"
            />
            <p className="text-xs uppercase">
              {info?.current?.weather[0]?.description ?? "N/A"}
            </p>
          </div>
        </div>
        <div className="max-md:flex max-md:justify-around max-md:mt-3">
          <h3>Sunrise: {sunRise}</h3>
          <h3>Sunset: {sunSet}</h3>
        </div>
        <div
          className="mt-24 flex justify-around text-white max-md:grid max-md:grid-cols-2 max-md:gap-4 max-md:px-4
         max-md:mt-10 max-md:mb-4"
        >
          <div>
            <h3 className="text-center">HUMIDITY</h3>
            <h3 className="text-center">
              {`${info?.current?.humidity}%` ?? "N/A"}
            </h3>
          </div>
          <div>
            <h3 className="text-center">VISIBILITY</h3>
            <h3 className="text-center">
              {`${info?.current?.visibility / 1000}km` ?? "N/A"}
            </h3>
          </div>
          <div>
            <h3 className="text-center">AIR PRESSURE</h3>
            <h3 className="text-center">
              {`${info?.current?.pressure}hPa` ?? "N/A"}
            </h3>
          </div>
          <div>
            <h3 className="text-center">WIND</h3>
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
