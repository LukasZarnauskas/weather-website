function WeatherByHour({ info, active, temp }) {
  const timeStamp = info?.dt;
  const date = new Date(timeStamp * 1000);

  const hours = String(date.getHours()).padStart(2, "0");

  const fahrenheit = (info?.temp || info?.main?.temp) * 1.8 + 32;

  return (
    <div
      className={`rounded-lg w-20 flex flex-col items-center bg-gradient-to-b ${
        active
          ? "via-purple-500 from-purple-600"
          : "via-green-400 from-green-600"
      }  to-black`}
    >
      <h3 className="font-light">{hours}:00</h3>
      <img
        className=""
        src={`https://openweathermap.org/img/w/${info?.weather[0]?.icon}.png
`}
        alt="icon"
      />
      <h4 className="font-light">
        {(temp
          ? info?.temp?.toFixed() || info?.main?.temp?.toFixed()
          : fahrenheit.toFixed()) || "N/A"}
        °
      </h4>
    </div>
  );
}

export default WeatherByHour;
