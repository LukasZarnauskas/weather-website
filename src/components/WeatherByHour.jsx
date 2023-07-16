function WeatherByHour({ info }) {
  const timeStamp = info?.dt;
  const date = new Date(timeStamp * 1000);

  const hours = String(date.getHours()).padStart(2, "0");

  return (
    <div className="rounded-lg w-20 flex flex-col items-center bg-gradient-to-b via-purple-500 from-purple-600 to-black">
      <h3 className="font-light">{hours}:00</h3>
      <img
        className=""
        src={`http://openweathermap.org/img/w/${info?.weather[0]?.icon}.png
`}
        alt="icon"
      />
      <h4 className="font-light">{info?.temp.toFixed()}°</h4>
    </div>
  );
}

export default WeatherByHour;
