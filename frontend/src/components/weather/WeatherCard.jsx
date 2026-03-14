import { useEffect } from "react"
import { useWeather } from "../../hooks/useWeather"
import LoadingSpinner from "../common/LoadingSpinner"
import ErrorMessage from "../common/ErrorMessage"

import useWeatherStore from "../../store/weatherStore"
import HourlyForecast from "./HourlyForecast"

function WeatherCard({ lat, lon }) {
  const { data, isLoading, isError } = useWeather(lat, lon)
  const setIsDay = useWeatherStore((state) => state.setIsDay)
  const setLicence = useWeatherStore((state) => state.setLicence)

  useEffect(() => {
    if (data) {
      setIsDay(data.weather.current.is_day)
      setLicence(data.location.licence, data.location.licence_url)
    }
  }, [data, setIsDay, setLicence])

  if (isLoading || !data) return (
    <div className="flex-1 flex items-center justify-center">
      <LoadingSpinner />
    </div>
  )
  if (isError) return (
    <div className="flex-1 flex items-center justify-center">
      <ErrorMessage />
    </div>
  )

  const { weather, location } = data

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-8 text-center">
      <h1 className="text-xl md:text-2xl">{location.address?.city || location.address?.town} - {location.address?.state}</h1>
      <h1 className="text-5xl md:text-7xl font-bold my-2">{weather.current.temperature}°C</h1>
      <div className="inline-flex gap-4 bg-white/20 backdrop-blur-lg rounded-xl px-4 py-2 text-sm opacity-70 mt-1">
        <span>Elevation: {weather.location.elevation}m</span>
        <span>{weather.location.latitude}, {weather.location.longitude}</span>
      </div>
      <HourlyForecast forecast={weather.forecast} />
    </div>
  )
}

export default WeatherCard