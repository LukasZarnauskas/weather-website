/* eslint-disable react/prop-types */
function WeatherButton({ day }) {
  return (
    <button
      className="  text-3xl text-gray-200 font-light focus:border-b-2
     focus:border-gray-200 focus:text-white focus:font-bold focus:transition focus:duration-500 ease-in-out"
    >
      {day}
    </button>
  );
}

export default WeatherButton;
