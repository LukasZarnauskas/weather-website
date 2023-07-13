import { useEffect } from "react";

function WeatherMain({ temp, city }) {
  return (
    <section className="flex items-center justify-center my-12">
      <div className=" px-7 rounded-lg text-white w-814 bg-gradient-to-r via-purple-500 from-purple-600 to-black">
        <h3 className="flex text-2xl font-light mt-8 mb-16 ">
          Kaunas <img src="/src/images/icon _location_.png" alt="location" />
        </h3>
        <h2 className="flex text-7xl items-center justify-center">
          <img
            className="h-16"
            src="/src/images/icon _temperature_.png"
            alt="termometer"
          />{" "}
          27°C <img className="h-16" src="/src/images/Cloud.png" alt="cloud" />
        </h2>
        <h3 className="text-xl"> Aug 23, Tue</h3>
        <div className="mt-24 flex justify-around text-white">
          <div>
            <h3>HUMIDITY</h3>
            <h3>99%</h3>
          </div>
          <div>
            <h3>HUMIDITY</h3>
            <h3>99%</h3>
          </div>
          <div>
            <h3>HUMIDITY</h3>
            <h3>99%</h3>
          </div>
          <div>
            <h3>HUMIDITY</h3>
            <h3>99%</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherMain;
