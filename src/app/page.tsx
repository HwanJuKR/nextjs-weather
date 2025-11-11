"use client";

import WeatherCard from "@/components/WeatherCard";
import { useWeather } from "@/hooks/useWeather";

export default function Home() {
  const { weather, loading, error } = useWeather();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {loading && (
          <div className="text-center text-white">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
            <p className="text-xl font-medium">날씨 정보를 불러오는 중...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p className="font-bold">오류가 발생했습니다</p>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && weather && <WeatherCard data={weather} />}
      </div>
    </main>
  );
}
