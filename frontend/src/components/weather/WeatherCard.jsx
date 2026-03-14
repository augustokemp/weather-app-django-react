import { useWeather } from "../../hooks/useWeather"
import LoadingSpinner from "../common/LoadingSpinner"

import useWeatherStore from "../../store/weatherStore"

function WeatherCard({ lat, lon }) {
  const { data: weather, isLoading, isError } = useWeather(lat, lon)
  const setIsDay = useWeatherStore((state) => state.setIsDay)

  if (!isLoading && weather) {
    setIsDay(weather.current.is_day)
  }

  if (isLoading || !weather) return (
    <div className="flex-1 flex items-center justify-center">
      <LoadingSpinner />
    </div>
  )
  if (isError) return (
    <div className="flex-1 flex items-center justify-center">
      <ErrorMessage />
    </div>
  )

  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold">{weather.current.temperature}°C</h1>
    </div>
  )
}

export default WeatherCard