import React, { useEffect, useState } from "react";
import { Get_Weather } from "./Service/Get_Weather";
import skyimg from "../Photo/skyimg.jpeg";
import { LuCalendar } from "react-icons/lu";
import { TbTemperatureSun } from "react-icons/tb";
import { FiSun } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { BsDropletHalf } from "react-icons/bs";
import { LuWind } from "react-icons/lu";
import moment from "moment";

const WeatherComponent = () => {
  const [city, setCity] = useState("Lucknow");
  const [weather, setWeather] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    if (city) {
      try {
        const data = await Get_Weather(city);
        setWeather(data);
        console.log("first::", data);
      } catch (err) {
        setError("Failed to fetch weather data.");
        console.error(err);
        console.log("Hii::", data);
      }
    }
  };
  useEffect(() => {
    fetchWeather();
  }, []);

  const data = new Date();
  console.log("Date:", moment(data).format("L"));
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${skyimg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />{" "}
      </div>
      <div className=" relative flex md:hidden pt-10 flex-col items-center z-10 h-full">
        <div className="flex mx-5 my-7  ">
          <input
            className="w-full p-3  rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-xl bg-white  text-black"
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Search City"
          />
          <button
            onClick={fetchWeather}
            className="bg-blue-500 p-3 text-white rounded-r-md  hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
        <div className="flex gap-x-4 mt-5  items-center">
          <div>
            <TfiLocationPin className="text-3xl text-white" />
          </div>
          <div className="text-3xl font-semibold text-white ">
            {weather?.name}, {weather?.sys?.country}
          </div>
        </div>
        <div className="flex gap-x-4 mt-5  items-center">
          <div>
            <LuCalendar className="text-2xl text-gray-200" />
          </div>
          <div className="text-xl  text-gray-200 ">
            {moment(data).format("LL")}
          </div>
        </div>
        <div className="flex   w-[100%] mt-8  border-red-600 items-center justify-between">
          <div className=" w-[40%]">
            {" "}
            {weather?.weather[0]?.main === "Rain" && (
              <div className="loader mt-16 md:mt-8">
                <div className="snow">
                  <span style={{ "--i": 11 }}></span>
                  <span style={{ "--i": 12 }}></span>
                  <span style={{ "--i": 15 }}></span>
                  <span style={{ "--i": 17 }}></span>
                  <span style={{ "--i": 18 }}></span>
                  <span style={{ "--i": 13 }}></span>
                  <span style={{ "--i": 14 }}></span>
                  <span style={{ "--i": 19 }}></span>
                  <span style={{ "--i": 20 }}></span>
                  <span style={{ "--i": 10 }}></span>
                  <span style={{ "--i": 18 }}></span>
                  <span style={{ "--i": 13 }}></span>
                  <span style={{ "--i": 14 }}></span>
                  <span style={{ "--i": 19 }}></span>
                  <span style={{ "--i": 20 }}></span>
                  <span style={{ "--i": 10 }}></span>
                  <span style={{ "--i": 18 }}></span>
                  <span style={{ "--i": 13 }}></span>
                  <span style={{ "--i": 14 }}></span>
                  <span style={{ "--i": 19 }}></span>
                  <span style={{ "--i": 20 }}></span>
                  <span style={{ "--i": 10 }}></span>
                </div>
              </div>
            )}
            {weather?.weather[0]?.main === "Clear" && (
              <div className="flex items-center gap-x-2">
                <div>
                  <div className="container">
                    <span className="sun sunshine"></span>
                    <span className="sun"></span>
                  </div>
                </div>
              </div>
            )}
            {weather?.weather[0]?.main === "Clouds" && (
              <div class="container1  ">
                <div class="cloud front1">
                  <span class="left-front1"></span>
                  <span class="right-front1"></span>
                </div>
                <span class="sun sunshine1"></span>
                <span class="sun1"></span>
                <div class="cloud back1">
                  <span class="left-back1"></span>
                  <span class="right-back1"></span>
                </div>
              </div>
            )}
          </div>
          <div className="w-[60%] items-center  flex flex-col gap-y-5">
          <div>
              <TbTemperatureSun className="text-6xl text-white" />
            </div>
            <div className="text-5xl font-bold  text-white">
              {weather?.main?.temp?.toFixed(1)}°C
            </div>
            <div className="flex items-center gap-3  ">

            <div>
              <FiSun className="text-3xl mt-1 text-white" />
            </div>
            <div className=" text-white text-3xl ">
              {weather?.weather[0]?.main}
            </div>
            </div>
            <div className="flex items-center text-white font-semibold gap-x-2 text-lg  justify-center">
            <div>
              <BsDropletHalf />
            </div>
            <div className="text-gray-200">Humidity</div>
            <div className="text-gray-200">{weather?.main?.humidity}%</div>
          </div>
          <div className="flex items-center text-white font-semibold gap-x-2 text-lg  justify-center">
            <div>
              <LuWind />
            </div>
            <div className="text-gray-200">Wind</div>
            <div className="text-gray-200">{weather?.wind?.speed} m/s</div>
          </div>
          </div>
        </div>
      </div>

      <div className="relative hidden md:flex  gap-x-14 z-10 h-full  items-center justify-center px-4 ">
        <div className="w-[40%]  justify-center bg-white   bg-opacity-90 rounded-lg shadow-lg text-center">
          <div className="flex  ">
            <input
              className="w-full p-3  rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-xl text-black"
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Search for weather by city"
            />
            <button
              onClick={fetchWeather}
              className="bg-blue-500 p-3 text-white rounded-r-md  hover:bg-blue-600 transition"
            >
              Search
            </button>
          </div>
        </div>
        <div className="  w-[50%]  ">
          <div className="flex gap-x-4 my-2 items-center">
            <div>
              <TfiLocationPin className="text-4xl text-white" />
            </div>
            <div className="text-4xl font-semibold text-white ">
              {weather?.name}, {weather?.sys?.country}
            </div>
          </div>
          <div className="flex gap-x-4 ml-2 items-center">
            <div>
              <LuCalendar className="text-2xl text-gray-400" />
            </div>
            <div className="text-xl font-semibold text-gray-200 ">
              {moment(data).format("LL")}
            </div>
          </div>
          <div className="flex items-center gap-x-1   lg:gap-x-5">
            {weather?.weather[0]?.main === "Rain" && (
              <div className="loader mt-8">
                <div className="snow">
                  <span style={{ "--i": 11 }}></span>
                  <span style={{ "--i": 12 }}></span>
                  <span style={{ "--i": 15 }}></span>
                  <span style={{ "--i": 17 }}></span>
                  <span style={{ "--i": 18 }}></span>
                  <span style={{ "--i": 13 }}></span>
                  <span style={{ "--i": 14 }}></span>
                  <span style={{ "--i": 19 }}></span>
                  <span style={{ "--i": 20 }}></span>
                  <span style={{ "--i": 10 }}></span>
                  <span style={{ "--i": 18 }}></span>
                  <span style={{ "--i": 13 }}></span>
                  <span style={{ "--i": 14 }}></span>
                  <span style={{ "--i": 19 }}></span>
                  <span style={{ "--i": 20 }}></span>
                  <span style={{ "--i": 10 }}></span>
                  <span style={{ "--i": 18 }}></span>
                  <span style={{ "--i": 13 }}></span>
                  <span style={{ "--i": 14 }}></span>
                  <span style={{ "--i": 19 }}></span>
                  <span style={{ "--i": 20 }}></span>
                  <span style={{ "--i": 10 }}></span>
                </div>
              </div>
            )}
            {weather?.weather[0]?.main === "Clear" && (
              <div className="flex items-center gap-x-2">
                <div>
                  <div className="container">
                    <span className="sun sunshine"></span>
                    <span className="sun"></span>
                  </div>
                </div>
              </div>
            )}

            {weather?.weather[0]?.main === "Clouds" && (
              <div class="container1  ">
                <div class="cloud front1">
                  <span class="left-front1"></span>
                  <span class="right-front1"></span>
                </div>
                <span class="sun sunshine1"></span>
                <span class="sun1"></span>
                <div class="cloud back1">
                  <span class="left-back1"></span>
                  <span class="right-back1"></span>
                </div>
              </div>
            )}
            <div>
              <TbTemperatureSun className="text-8xl text-white" />
            </div>
            <div className=" text-4xl lg:text-7xl font-bold text-white">
              {weather?.main?.temp?.toFixed(1)}°C
            </div>
          </div>
          <div className="flex items-center justify-center my-3 gap-x-4 ">
            <div>
              <FiSun className="text-4xl mt-1 text-white" />
            </div>
            <div className="font-semibold text-white text-4xl ">
              {weather?.weather[0]?.main}
            </div>
          </div>
          <div className="flex items-center text-white font-semibold gap-x-2 text-lg  justify-center">
            <div>
              <BsDropletHalf />
            </div>
            <div>Humidity</div>
            <div>{weather?.main?.humidity}%</div>
          </div>
          <div className="flex items-center text-white font-semibold gap-x-2 text-lg  justify-center">
            <div>
              <LuWind />
            </div>
            <div>Wind</div>
            <div>{weather?.wind?.speed} m/s</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherComponent;
