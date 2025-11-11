"use client";

import React from "react";
import { WeatherData } from "@/types/weather";
import Image from "next/image";

const WeatherCard = ({ data }: { data: WeatherData | null }) => {
  if (!data) return null;

  const getWeatherIcon = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  };

  return (
    <div className="bg-linear-to-br from-[#74b9ff] to-[#a29bfe] text-white text-center rounded-2xl p-6 mx-auto my-8 shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
        <h1 className="text-2xl font-bold m-0">
          {data.name}, {data.sys.country}
        </h1>
        <Image
          src={getWeatherIcon(data.weather[0].icon)}
          alt={data.weather[0].description}
          width={80}
          height={80}
          className="drop-shadow-lg"
        />
      </div>
      <div className="text-center mb-8">
        <p className="text-5xl font-bold mb-2 [text-shadow:2px_2px_4px_rgba(0,0,0,0.2)]">
          {Math.round(data.main.temp)}°C
        </p>
        <p className="text-lg font-medium capitalize mb-2">
          {data.weather[0].description}
        </p>
        <p className="text-sm opacity-90">
          체감온도: {Math.round(data.main.feels_like)}°C
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-white/20">
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold opacity-80 mb-1">습도</span>
          <span className="text-lg font-bold">{data.main.humidity}%</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold opacity-80 mb-1">풍속</span>
          <span className="text-lg font-bold">{data.wind.speed.toFixed(1)} m/s</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold opacity-80 mb-1">기압</span>
          <span className="text-lg font-bold">{data.main.pressure} hPa</span>
        </div>
      </div>
      <div className="flex justify-around text-center">
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold opacity-80 mb-1">최고:</span>
          <span className="text-2xl font-bold text-red-100">
            {Math.round(data.main.temp_max)}°C
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold opacity-80 mb-1">최저:</span>
          <span className="text-2xl font-bold text-blue-100">
            {Math.round(data.main.temp_min)}°C
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

