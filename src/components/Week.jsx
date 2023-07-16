function Week({ info }) {
  console.log(info);
  const timeStamp = info?.dt;
  const date = new Date(timeStamp * 1000);

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return (
    <div className=" p-3 mb-1 rounded-lg flex justify-between items-center text-white w-814 bg-gradient-to-r via-purple-500 from-green-600 to-black">
      <h3>
        Date: {month}/{day}
      </h3>
      <img
        src={`http://openweathermap.org/img/w/${info?.weather[0]?.icon}.png`}
        alt="icon"
      />
      <p>{info?.weather[0]?.description}</p>
      <p>Day: {info?.temp?.day.toFixed()}°C</p>
      <p>Night: {info?.temp?.night.toFixed()}°C</p>
      <h4>Wind: {info?.wind_speed}m/s</h4>
    </div>
  );
}

export default Week;
