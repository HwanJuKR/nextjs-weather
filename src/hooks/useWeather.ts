"use client";

import { useEffect, useState } from "react";
import { WeatherData, WeatherState } from "@/types/weather";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

export const useWeather = (): WeatherState => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!API_KEY) {
      setError("API 키를 찾을 수 없습니다. 환경 변수를 확인해주세요.");
      setLoading(false);

      return;
    }

    if (!navigator.geolocation) {
      setError("브라우저에서 위치 정보를 지원하지 않습니다.");
      setLoading(false);

      return;
    }

    const handleSuccess = async (position: GeolocationPosition) => {
      try {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`
        );

        if (!response.ok) {
          throw new Error("날씨 정보를 불러오는데 실패했습니다.");
        }

        const data: WeatherData = await response.json();
        setWeather(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "오류가 발생했습니다.");
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    const handleError = (error: GeolocationPositionError) => {
      setError(`위치 정보 오류: ${error.message}`);

      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { weather, loading, error };
};

